import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export function authApi(loginData) {
    return axios.post(`${BASE_URL}/Auth/login`, loginData);
};
