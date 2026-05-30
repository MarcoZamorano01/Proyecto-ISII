import { useState }
    from "react";

import useCrud
    from "../hooks/useCrud";

import questionService
    from "../services/questionService";

function Questions() {

    const {
        data,
        create,
        remove
    } =
        useCrud(questionService);

    const [question,
        setQuestion] =
        useState("");

    function save(e) {

        e.preventDefault();

        create({
            question
        });

        setQuestion("");
    }

    return (
        <div>

            <h2>Preguntas</h2>

            <form onSubmit={save}>

                <input
                    value={question}
                    onChange={(e) =>
                        setQuestion(
                            e.target.value
                        )
                    }
                />

                <button>
                    Guardar
                </button>

            </form>

            {
                data.map(item => (

                    <div key={item.id}>

                        {item.question}

                        <button
                            onClick={() =>
                                remove(item.id)
                            }
                        >
                            Eliminar
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default Questions;