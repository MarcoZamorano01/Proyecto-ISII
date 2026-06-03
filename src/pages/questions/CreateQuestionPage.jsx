import { useState } from "react";

import {
    createQuestion
}
    from "../../api/questionApi";

function CreateQuestionPage() {

    const [text, setText] =
        useState("");

    const [category, setCategory] =
        useState("");

    const save =
        async () => {

            await createQuestion({
                text,
                category
            });

            alert(
                "Pregunta creada"
            );
        };

    return (

        <div>

            <h2>
                Nueva Pregunta
            </h2>

            <input
                placeholder="Pregunta"
                value={text}
                onChange={(e) =>
                    setText(
                        e.target.value
                    )
                }
            />

            <input
                placeholder="Categoría"
                value={category}
                onChange={(e) =>
                    setCategory(
                        e.target.value
                    )
                }
            />

            <button
                onClick={save}
            >
                Guardar
            </button>

        </div>
    );
}

export default CreateQuestionPage;