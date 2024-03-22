# frontend_ecr.tf

terraform {
  required_providers {
    aws = ">= 3.0, < 4.0"
  }
}

provider "aws" {
  region     = var.AWS_REGION
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
}

data "aws_ecr_repository" "existing_repository" {
  name = var.ECR_REPOSITORY
}

resource "null_resource" "build_and_push" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = <<-EOT
      aws ecr get-login-password --region us-west-2 --profile elifuchsmanfe | docker login --username AWS --password-stdin ${data.aws_ecr_repository.existing_repository.repository_url}

      docker build -t ${data.aws_ecr_repository.existing_repository.repository_url}:elifuchsmanfe-app .
      docker push ${data.aws_ecr_repository.existing_repository.repository_url}:elifuchsmanfe-app
    EOT
  }
}

output "docker_image_url" {
  value = "${data.aws_ecr_repository.existing_repository.repository_url}:elifuchsmanfe-app"
}
