import {
    useEffect,
    useState
}
from "react";

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
from "../../api/usersApi";

function UsersPage() {

    const [users, setUsers] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [roleFilter, setRoleFilter] =
        useState("");

    const [editingId, setEditingId] =
        useState(null);

    const [form, setForm] =
        useState({
            name: "",
            email: "",
            role: "Student"
        });

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers =
        async () => {

            const data =
                await getUsers();

            setUsers(data);
        };

    const handleSubmit =
        async e => {

            e.preventDefault();

            if (editingId) {

                await updateUser(
                    editingId,
                    form
                );

            } else {

                await createUser(
                    form
                );
            }

            resetForm();

            loadUsers();
        };

    const resetForm =
        () => {

            setEditingId(null);

            setForm({
                name: "",
                email: "",
                role: "Student"
            });
        };

    const handleEdit =
        user => {

            setEditingId(
                user.id
            );

            setForm({
                name:
                    user.name,

                email:
                    user.email,

                role:
                    user.role
            });
        };

    const handleDelete =
        async id => {

            const confirmDelete =
                window.confirm(
                    "¿Eliminar usuario?"
                );

            if (!confirmDelete)
                return;

            await deleteUser(id);

            loadUsers();
        };

    const filteredUsers =
        users.filter(user => {

            const matchesSearch =

                user.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )

                ||

                user.email
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesRole =

                roleFilter === ""

                ||

                user.role ===
                roleFilter;

            return (
                matchesSearch
                &&
                matchesRole
            );
        });

    return (

        <div>

            <h1>
                Gestión de Usuarios
            </h1>

            <form
                onSubmit={
                    handleSubmit
                }
            >

                <input
                    placeholder="Nombre"
                    value={form.name}
                    onChange={e =>
                        setForm({
                            ...form,
                            name:
                                e.target.value
                        })
                    }
                />
                <br /> <br />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={e =>
                        setForm({
                            ...form,
                            email:
                                e.target.value
                        })
                    }
                />
                <br /> <br />
                <select
                    value={form.role}
                    onChange={e =>
                        setForm({
                            ...form,
                            role:
                                e.target.value
                        })
                    }
                >
                    <option>
                        Student
                    </option>

                    <option>
                        Admin
                    </option>

                </select>
                    <br /> <br />
                <button>

                    {
                        editingId
                        ? "Actualizar"
                        : "Crear"
                    }

                </button>
                    <br /> <br />
            </form>
                    
            <hr />
                    <br /> 
            <input
                placeholder="Buscar..."
                value={search}
                onChange={e =>
                    setSearch(
                        e.target.value
                    )
                }
            />

            <select
                value={
                    roleFilter
                }
                onChange={e =>
                    setRoleFilter(
                        e.target.value
                    )
                }
            >

                <option value="">
                    Todos
                </option>

                <option value="Admin">
                    Admin
                </option>

                <option value="Student">
                    Student
                </option>

            </select>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Nombre</th>

                        <th>Email</th>

                        <th>Rol</th>

                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        filteredUsers.map(
                            user => (

                                <tr
                                    key={
                                        user.id
                                    }
                                >

                                    <td>
                                        {
                                            user.id
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.name
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.email
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.role
                                        }
                                    </td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                handleEdit(
                                                    user
                                                )
                                            }
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    user.id
                                                )
                                            }
                                        >
                                            Eliminar
                                        </button>

                                    </td>

                                </tr>

                            )
                        )
                    }

                </tbody>

            </table>

        </div>
    );
}

export default UsersPage;