import {
    useEffect,
    useState
} from "react";

import {
    getUsers,
    deleteUser
}
    from "../api/userApi";

import DataTable
    from "../components/common/DataTable";

function UsersAdminPage() {

    const [users,
        setUsers] =
        useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers =
        async () => {

            const data =
                await getUsers();

            setUsers(data);
        };

    const handleDelete =
        async (id) => {

            await deleteUser(id);

            loadUsers();
        };

    return (

        <div>

            <h1>
                Usuarios
            </h1>

            <DataTable

                columns={[
                    "id",
                    "name",
                    "email"
                ]}

                data={users}

                actions={(row) => (

                    <button
                        onClick={() =>
                            handleDelete(
                                row.id
                            )
                        }
                    >

                        Eliminar

                    </button>

                )}

            />

        </div>
    );
}

export default UsersAdminPage;