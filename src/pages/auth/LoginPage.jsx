import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage.css";
import { loginUser } from "../../api/authApi";

function LoginPage() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await loginUser({
          email,
          password
        });

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "role",
        response.role
      );

      localStorage.setItem(
        "userId",
        response.userId
      );

      localStorage.setItem(
        "name",
        response.name
      );

      if (
        response.role ===
        "Admin"
      ) {

        navigate(
          "/dashboard"
        );

      } else {

        navigate(
          "/home"
        );
      }

    }
    catch {

      alert(
        "Credenciales incorrectas"
      );
    }
  };

  return (

    <div className="login-container">

      <form
        onSubmit={handleSubmit}
      >
        <div className="logo-circle">
          🔐
        </div>
        <h2>
          Iniciar Sesión
        </h2>

        <input 
        type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />
        
        <button type="submit"
      className="login-btn">
          Ingresar
        </button>
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Crear cuenta
        </button>

      </form>

    </div>
  );
}

export default LoginPage;