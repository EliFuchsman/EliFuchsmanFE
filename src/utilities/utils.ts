export const getInfo = async (urlPath: string) => {
  let url: string = urlPath;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error: any) {

    console.error('Error:', error.message);
    throw error;
  }
};

export const getSummary = async (urlPath: string) => {
  let url: string = urlPath;
  console.log('url', url)
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error: any) {

    console.error('Error:', error.message);
    throw error;
  }
};

export const getEducation = async (urlPath: string) => {
  let url: string = urlPath;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error: any) {

    console.error('Error:', error.message);
    throw error;
  }
};

export const getExperience = async (urlPath: string) => {
  let url: string = urlPath;

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error: any) {

    console.error('Error:', error.message);
    throw error;
  }
};

export const getProjects = async (urlPath: string) => {
  let url: string = urlPath;
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error: any) {

    console.error('Error:', error.message);
    throw error;
  }
};
