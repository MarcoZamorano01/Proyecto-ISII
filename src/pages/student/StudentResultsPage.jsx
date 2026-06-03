import { useEffect, useState } from "react";
import { getMyResults } from "../../api/resultsApi";

import "../../styles/StudentResultsPage.css";

function StudentResultsPage() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        loadResults();
    }, []);

    const loadResults = async () => {

        const data = await getMyResults();

        setResults(data);
    };

    const averageScore =
        results.length > 0
            ? Math.round(
                results.reduce(
                    (acc, item) => acc + item.score,
                    0
                ) / results.length
            )
            : 0;

    return (

        <div className="student-results">

            <div className="page-header">

                <h1>📊 Mis Resultados</h1>

                <p>
                    Historial de evaluaciones vocacionales
                </p>

            </div>

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>
                        Total Tests
                    </h3>

                    <span>
                        {results.length}
                    </span>

                </div>

                <div className="stat-card">

                    <h3>
                        Compatibilidad Promedio
                    </h3>

                    <span>
                        {averageScore}%
                    </span>

                </div>

            </div>

            {
                results.length === 0 ? (

                    <div className="empty-state">

                        <h2>
                            Aún no tienes resultados
                        </h2>

                        <p>
                            Completa tu primer test vocacional.
                        </p>

                    </div>

                ) : (

                    <div className="results-table-card">

                        <table>

                            <thead>

                                <tr>

                                    <th>Categoría</th>

                                    <th>Compatibilidad</th>

                                    <th>Recomendación</th>

                                    <th>Fecha</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    results.map(result => (

                                        <tr
                                            key={result.id}
                                        >

                                            <td>
                                                {result.category}
                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        result.score >= 80
                                                            ? "badge-success"
                                                            : result.score >= 50
                                                                ? "badge-warning"
                                                                : "badge-danger"
                                                    }
                                                >
                                                    {result.score}%
                                                </span>

                                            </td>

                                            <td>
                                                {result.recommendation}
                                            </td>

                                            <td>
                                                {
                                                    new Date(
                                                        result.createdAt
                                                    ).toLocaleDateString()
                                                }
                                            </td>

                                        </tr>

                                    ))
                                }

                            </tbody>

                        </table>

                    </div>

                )
            }

        </div>

    );
}

export default StudentResultsPage;