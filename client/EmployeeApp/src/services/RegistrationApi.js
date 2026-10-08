import axios from "axios";

const BASE_URL = "http://localhost:5000/api";


export function Registration(signupData) {
    const token = localStorage.getItem("token");
    return axios.post(
        `${BASE_URL}/Auth/register`,
        signupData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}