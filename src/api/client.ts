import Config from 'react-native-config';

const baseURL: string = Config.BASE_URL ?? '';

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

export const client = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(`${baseURL}${url}`, fetchOptions);

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
