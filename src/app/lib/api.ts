import axios from "axios";

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

export const login = async (credentials: { email: string, password: string }) => {
    const { email, password } = credentials

    try {
        const response = await axios.post('/session', {
            email: email,
            password: password
        });

        const token = response.data.token
        const user = response.data.user

        return { token, user }
    } catch (error) {
        return error
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