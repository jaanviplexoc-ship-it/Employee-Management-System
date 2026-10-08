import { jwtDecode } from "jwt-decode";
import { useContext, useState } from "react";
import LoginFields from "../molecules/LoginFields";
import PrimaryButton from "../atoms/PrimaryButton";
import { authApi } from "../../services/authApi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("password or email must be required !!!");
      return
    };

    const loginData = {
      email: email,
      password: password
    };

    const response = await authApi(loginData);

    const token = response.data.token;

    if (!token) {
      alert("Login failed");
      return;
    }

    const decodedToken = jwtDecode(token);

    const role = decodedToken.role;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setToken(token);
    setRole(role);

    setemail("");
    setPassword("");

    navigate("/dashboard");
  }

  return (

    <form className="login-form" onSubmit={handleSubmit}>

      <LoginFields
        email={email}
        password={password}
        setemail={setemail}
        setPassword={setPassword}
      />

      <div className="login-button">
        <PrimaryButton type="submit" />
      </div>

      {/* Registration Option */}
      <div className="registration-option">

        <span>Don't have an account?</span>

        <button
          type="button"
          className="register-button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>

      </div>

    </form>
  )
}