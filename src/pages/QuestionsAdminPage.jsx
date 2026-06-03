import {
    useEffect,
    useState
} from "react";

import {
    getQuestions,
    deleteQuestion
}
    from "../api/questionApi";

function QuestionsAdminPage() {

    const [questions,
        setQuestions] =
        useState([]);

    useEffect(() => {

        loadQuestions();

    }, []);

    const loadQuestions =
        async () => {

            const data =
                await getQuestions();

            setQuestions(data);
        };

    return (

        <div>

            <h1>
                Preguntas
            </h1>

            {
                questions.map(
                    question => (

                        <div
                            key={question.id}
                        >

                            {question.text}

                            <button
                                onClick={() =>
                                    deleteQuestion(
                                        question.id
                                    )
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

export default QuestionsAdminPage;