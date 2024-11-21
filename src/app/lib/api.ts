import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const login = async (credentials: { email: string, password: string }) => {
    console.log(credentials)
    const {email, password} = credentials

    try {
        const response = await axios.post('/session', {
            email: email,
            password: password
        });
        console.log(response);

        const token = response.data.token
        const user = response.data.user

        return {token, user}
    } catch (error) {
        console.log(error);
        alert(error.response.data);
        return 
    }
}

export const postImg = async (data: {filename:string, caught_file: string, new_file:string}) => {
    const {filename, caught_file, new_file} = data

    try {
        const response = await axios.post('gallery', {
            filename, caught_file, new_file
        })

        console.log(response.data)

        return true
    } catch (error) {
        console.log(error)
        return
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
            params:queryParams
        });
        console.log(response);

        return response.data
    } catch (error) {
        console.log(error);
        return
    }
}