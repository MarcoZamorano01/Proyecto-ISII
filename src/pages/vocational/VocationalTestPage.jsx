import { useEffect, useState } from "react";

import {
    getCategories,
    getQuestionsByCategory
}
    from "../../api/questionsApi";

import {
    createResult
}
    from "../../api/resultsApi";

import "./VocationalTestPage.css";

function VocationalTestPage() {

    const [categories, setCategories] =
        useState([]);

    const [selectedCategory, setSelectedCategory] =
        useState("");

    const [questions, setQuestions] =
        useState([]);

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [positiveAnswers, setPositiveAnswers] =
        useState(0);

    const [finished, setFinished] =
        useState(false);

    const [result, setResult] =
        useState(null);

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories =
        async () => {

            const data =
                await getCategories();

            setCategories(data);
        };

    const startTest =
        async () => {

            const data =
                await getQuestionsByCategory(
                    selectedCategory
                );

            setQuestions(data);

            setCurrentIndex(0);

            setPositiveAnswers(0);

            setFinished(false);

            setResult(null);
        };

    const answerQuestion =
        async (answer) => {

            let newPositive =
                positiveAnswers;

            if (answer)
                newPositive++;

            if (
                currentIndex <
                questions.length - 1
            ) {

                setPositiveAnswers(
                    newPositive
                );

                setCurrentIndex(
                    currentIndex + 1
                );

                return;
            }

            const percentage =
                Math.round(
                    (newPositive /
                        questions.length)
                    * 100
                );

            const recommendation =
                getRecommendation(
                    selectedCategory,
                    percentage
                );

            const resultData = {

                userId:
                    Number(
                        localStorage.getItem(
                            "userId"
                        )
                    ),

                category:
                    selectedCategory,

                recommendation,

                score:
                    percentage
            };

            await createResult(
                resultData
            );

            setResult(resultData);

            setFinished(true);
        };

    const getRecommendation =
        (category, score) => {

            if (score < 50)
                return
            "Compatibilidad Baja";

            const recommendations = {

                Ingenieria:
                    "Ingeniería de Sistemas",

                Salud:
                    "Medicina",

                Administracion:
                    "Administración de Empresas",

                Diseño:
                    "Diseño Gráfico",

                Educacion:
                    "Pedagogía"
            };

            return (
                recommendations[
                category
                ] ||
                category
            );
        };

    if (finished) {

        return (

            <div className="result-card">

                <h2>
                    Resultado Final
                </h2>

                <p>

                    <strong>
                        Categoría:
                    </strong>

                    {" "}

                    {result.category}

                </p>

                <p>

                    <strong>
                        Compatibilidad:
                    </strong>

                    {" "}

                    {result.score}%

                </p>

                <p>

                    <strong>
                        Carrera Recomendada:
                    </strong>

                    {" "}

                    {result.recommendation}
                    <div className="score-circle">
                        {result.score}%
                    </div>
                </p>

            </div>
        );
    }

    return (

        <div className="test-container">

            <h1>
                Test Vocacional
            </h1>

            {
                questions.length === 0 && (

                    <>

                        <select
                            value={
                                selectedCategory
                            }
                            onChange={
                                e =>
                                    setSelectedCategory(
                                        e.target.value
                                    )
                            }
                        >

                            <option value="">
                                Seleccione Categoría
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

                        <button
                            disabled={
                                !selectedCategory
                            }
                            onClick={
                                startTest
                            }
                        >
                            Iniciar Test
                        </button>

                    </>

                )
            }

            {
                questions.length > 0 && (

                    <>
                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${((currentIndex + 1) / questions.length) * 100}%`
                                }}
                            />
                        </div>
                        <h3>

                            Pregunta

                            {" "}

                            {currentIndex + 1}

                            {" / "}

                            {questions.length}

                        </h3>

                        <p>

                            {
                                questions[
                                    currentIndex
                                ]?.text
                            }

                        </p>

                        <div className="buttons">

                            <button
                                className="yes-btn"
                                onClick={() => answerQuestion(true)}
                            >
                                👍 Sí
                            </button>

                            <button
                                className="no-btn"
                                onClick={() => answerQuestion(false)}
                            >
                                👎 No
                            </button>

                        </div>

                    </>

                )
            }

        </div>
    );
}

export default VocationalTestPage;