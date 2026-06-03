import { useState } from "react";

import {
    createUser
}
    from "../../api/usersApi";

function CreateUserPage() {

    const [user,
        setUser] =
        useState({
            name: "",
            email: "",
            role: "Student"
        });

    const save =
        async () => {

            await createUser(
                user
            );

            alert(
                "Usuario creado"
            );
        };

    return (

        <div>

            <h2>
                Nuevo Usuario
            </h2>

            <input
                placeholder="Nombre"
            />

            <input
                placeholder="Email"
            />

            <button
                onClick={save}
            >
                Guardar
            </button>

        </div>
    );
}

export default CreateUserPage;