import { useEffect, useState } from "react";

import {
    getQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
}
    from "../../api/questionsApi";

function QuestionsPage() {

    const [questions, setQuestions] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [categoryFilter, setCategoryFilter] =
        useState("");

    const [form, setForm] =
        useState({
            text: "",
            category: ""
        });

    const [editingId, setEditingId] =
        useState(null);

    useEffect(() => {

        loadQuestions();

    }, []);

    const loadQuestions =
        async () => {

            const data =
                await getQuestions();

            setQuestions(data);
        };

    const handleSubmit =
        async (e) => {

            e.preventDefault();

            if (editingId) {

                await updateQuestion(
                    editingId,
                    form
                );

            } else {

                await createQuestion(
                    form
                );
            }

            setForm({
                text: "",
                category: ""
            });

            setEditingId(null);

            loadQuestions();
        };

    const handleEdit =
        question => {

            setEditingId(
                question.id
            );

            setForm({
                text:
                    question.text,

                category:
                    question.category
            });
        };

    const handleDelete =
        async id => {

            const confirmDelete =
                window.confirm(
                    "¿Eliminar pregunta?"
                );

            if (!confirmDelete)
                return;

            await deleteQuestion(id);

            loadQuestions();
        };

    const filteredQuestions =
        questions.filter(question => {

            const textMatch =
                question.text
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const categoryMatch =
                categoryFilter === "" ||
                question.category ===
                categoryFilter;

            return (
                textMatch &&
                categoryMatch
            );
        });

    const categories =
        [
            ...new Set(
                questions.map(
                    q => q.category
                )
            )
        ];

    return (

        <div>

            <h1>
                Gestión de Preguntas
            </h1>

            <form
                onSubmit={
                    handleSubmit
                }
            >

                <input
                    placeholder="Pregunta"
                    value={form.text}
                    onChange={e =>
                        setForm({
                            ...form,
                            text:
                                e.target.value
                        })
                    }
                />
                <br /> <br />
                <input
                    placeholder="Categoría"
                    value={form.category}
                    onChange={e =>
                        setForm({
                            ...form,
                            category:
                                e.target.value
                        })
                    }
                />
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
                    categoryFilter
                }
                onChange={e =>
                    setCategoryFilter(
                        e.target.value
                    )
                }
            >

                <option value="">
                    Todas
                </option>

                {
                    categories.map(
                        category => (

                            <option
                                key={
                                    category
                                }
                                value={
                                    category
                                }
                            >
                                {category}
                            </option>
                        )
                    )
                }

            </select>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Pregunta</th>

                        <th>Categoría</th>

                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        filteredQuestions
                            .sort(
                                (a, b) =>
                                    a.category.localeCompare(
                                        b.category
                                    )
                            )
                            .map(
                                question => (

                                    <tr
                                        key={
                                            question.id
                                        }
                                    >

                                        <td>
                                            {
                                                question.id
                                            }
                                        </td>

                                        <td>
                                            {
                                                question.text
                                            }
                                        </td>

                                        <td>
                                            {
                                                question.category
                                            }
                                        </td>

                                        <td>

                                            <button
                                                onClick={() =>
                                                    handleEdit(
                                                        question
                                                    )
                                                }
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        question.id
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

export default QuestionsPage;