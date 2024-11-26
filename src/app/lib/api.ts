import axios from "axios";
import { IApiResponse, IApiResponseError } from "./interfaces/apiResponse.interface";

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const signup = async (user: { name: string, email: string, password: string }) => {
    const { name, email, password } = user

    try {
        const response = await axios.post('/user', {
            name, email, password
        })

        return response
    } catch (error) {
        return error
    }
}

export const login = async (credentials: { email: string, password: string }): Promise<IApiResponse> => {
    const { email, password } = credentials

    try {
        const response = await axios.post('/session', {
            email: email,
            password: password
        });

        const token = response.data.token 
        const user = JSON.stringify(response.data.user)

        return { token, user }
    } catch (error) {
        const abc = error as IApiResponseError
        return {
            token: '',
            user: '',
            status: abc.status,
            message: abc.response.data.message 
        }
    }
}

export const postImg = async (data: { filename: string, caught_file: string, new_file: string }) => {
    const { filename, caught_file, new_file } = data
    const token = sessionStorage.getItem('token')


    try {
        const response = await axios.post('/gallery', {
            filename, caught_file, new_file
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        },)

        return response
    } catch (error) {
        return error
    }
}

export const getGallery = async (page: number) => {
    const token = sessionStorage.getItem('token')

    const queryParams = new URLSearchParams()
    queryParams.append("page", page.toString())

    try {
        const response = await axios.get('/gallery', {
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: queryParams
        });

        return response.data
    } catch (error) {
        return error
    }
}

export const deleteImgInGallery = async (id: number) => {
    const token = sessionStorage.getItem('token')

    try {
        const response = await axios.delete(`/gallery/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            },
        })

        return response
    } catch (error) {
        return error
    }
}