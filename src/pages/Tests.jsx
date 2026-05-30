import { useState }
    from "react";

import useCrud
    from "../hooks/useCrud";

import testService
    from "../services/testService";

function Tests() {

    const {
        data,
        create,
        remove
    } =
        useCrud(testService);

    const [title,
        setTitle] =
        useState("");

    function save(e) {

        e.preventDefault();

        create({
            title
        });

        setTitle("");
    }

    return (
        <div>

            <h2>Tests</h2>

            <form onSubmit={save}>

                <input
                    value={title}
                    onChange={(e) =>
                        setTitle(
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

                        {item.title}

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

export default Tests;