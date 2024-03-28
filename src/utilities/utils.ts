export const getInfo = async (urlPath: string, apiKey: string) => {
  try {
    const requestOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey
      }
    };

    const response = await fetch(urlPath, requestOptions);

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

export const getSummary = async (urlPath: string, apiKey: string) => {
  try {
    const requestOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey
      }
    };

    const response = await fetch(urlPath, requestOptions);

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

export const getEducation = async (urlPath: string, apiKey: string) => {
  try {
    const requestOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey
      }
    };

    const response = await fetch(urlPath, requestOptions);

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

export const getExperience = async (urlPath: string, apiKey: string) => {
  try {
    const requestOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey
      }
    };

    const response = await fetch(urlPath, requestOptions);

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

export const getProjects = async (urlPath: string, apiKey: string) => {
  try {
    const requestOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': apiKey
      }
    };

    const response = await fetch(urlPath, requestOptions);

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
