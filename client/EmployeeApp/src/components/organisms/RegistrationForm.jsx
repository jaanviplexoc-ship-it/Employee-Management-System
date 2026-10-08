import { useState } from "react";
import RegistrationFields from "../molecules/RegistrationFields";
import { Registration } from "../../services/RegistrationApi";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        joiningDate: "",
        departmentId: "",
        designationId: "",
        address: "",
        city: "",
        dateOfBirth: "",
        salary: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        try {
            const response = await Registration(formData);

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <RegistrationFields onChange={handleChange} />
            <button>Add</button>
        </form>
    );
}
