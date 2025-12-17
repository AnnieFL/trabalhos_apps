import axios from 'axios';

const API_URL = 'https://simple-api-ngvw.onrender.com';

export const urls = {
    USER: {
        BASE: '/users',
        AUTH: '/login'
    },
    POST: {
        BASE: '/posts'
    }
}

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export const PostFetch = async (url:string, body:object, authToken: string = ''):Promise<any> => {
  return api
    .post(url, body, {
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : undefined,
        }})
    .then((data:any) => data.data)
    .catch((error:object) => {
      console.log({
        msg: "Error in PostFetch --> " + url,
        error,
        body
      })
      throw error
    })
}

export const GetFetch = async (url:string, authToken: string = ''):Promise<any> => {
  try {
    const data = await api.get(url, {
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : undefined,
        }})
    return data.data
  } catch (error) {
    throw error
  }
}

export const DeleteFetch = async (url:string, authToken: string = ''):Promise<any> => {
  try {
    const data = await api.delete(url, {
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : undefined,
        }})
    return data.data
  } catch (error) {
    throw error
  }
}