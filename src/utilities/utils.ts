const API_ROUTE = process.env.BE_APP_ROOT;

export const getInfo = async () => {
  let url: string = `${API_ROUTE}/info`;

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

export const getSummary = async () => {
  let url: string = `${API_ROUTE}/summary`;

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

export const getEducation = async () => {
  let url: string = `${API_ROUTE}/education`;

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

export const getExperience = async () => {
  let url: string = `${API_ROUTE}/experience`;

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

export const getProjects = async () => {
  let url: string = `${API_ROUTE}/projects`;

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
