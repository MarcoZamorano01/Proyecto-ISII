import { useState } from "react";
import { registerUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import "../../styles/registerPage.css";

function RegisterPage() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const submit = async (e) => {

        e.preventDefault();

        await registerUser(form);

        alert("Usuario creado");

        navigate("/");
    };

    return (
        <div className="register-container">

            <form
                className="register-form"
                onSubmit={submit}
            >

                <div className="register-icon">
                    👤
                </div>

                <h2>Crear Cuenta</h2>

                <p>
                    Registra una nueva cuenta para continuar
                </p>

                <input
                    placeholder="Nombre completo"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <button
                    type="submit"
                    className="register-btn"
                >
                    Registrarse
                </button>

                <button
                    type="button"
                    className="back-btn"
                    onClick={() => navigate("/")}
                >
                    Volver al Login
                </button>

            </form>

        </div>
    );
}

export default RegisterPage;