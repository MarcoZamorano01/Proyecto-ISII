import {
    useState
}
    from "react";

import DataTable
    from "../components/DataTable";

import useCrud
    from "../hooks/useCrud";

import userService
    from "../services/userService";

function Users() {

    const {
        data,
        create,
        remove
    } =
        useCrud(userService);

    const [name,
        setName] =
        useState("");

    function save(e) {

        e.preventDefault();

        create({
            name
        });

        setName("");
    }

    return (

        <div>

            <h2>
                Usuarios
            </h2>

            <form
                onSubmit={save}
            >

                <input

                    value={name}

                    onChange={(e) =>

                        setName(
                            e.target.value
                        )
                    }

                />

                <button>
                    Guardar
                </button>

            </form>

            <DataTable

                columns={[
                    "name"
                ]}

                data={data}

                onDelete={
                    remove
                }

            />

        </div>
    );
}

export default Users;