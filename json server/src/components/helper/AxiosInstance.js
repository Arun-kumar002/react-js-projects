import axios from "axios";

let AxiosInstance=axios.create({
    baseURL:'http://localhost:3004'
})

export default AxiosInstance;