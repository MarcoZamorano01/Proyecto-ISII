import {
    useEffect,
    useState
}
    from "react";

import {
    getResults
}
    from "../../api/resultsApi";

import { CSVLink }
    from "react-csv";

function ResultsPage() {

    const [results, setResults] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [date, setDate] =
        useState("");

    useEffect(() => {

        loadResults();

    }, []);

    const loadResults =
        async () => {

            const data =
                await getResults();

            setResults(data);
        };

    const filtered =
        results.filter(r => {
            const userName =
            r.user?.name || "";

            const byName =
                (r.user?.name || "")
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const byCategory =
                category === ""
                ||
                r.category === category;

            const byDate =
                date === ""
                ||
                r.createdAt
                    .substring(0, 10)
                === date;

            return (
                byName
                &&
                byCategory
                &&
                byDate
            );
        });

    const categories =
        [
            ...new Set(
                results.map(
                    r => r.category
                )
            )
        ];

    return (

        <div>

            <h1>
                Resultados
            </h1>

            <div
                className="filters"
            >

                <CSVLink
                    data={filtered}
                    filename="resultados.csv"
                >
                    Exportar CSV
                </CSVLink>
                
                <br /> <hr /> <br /> 
                <input
                    placeholder="Buscar usuario"
                    value={search}
                    onChange={
                        e =>
                            setSearch(
                                e.target.value
                            )
                    }
                />
<br /> <br />
                <select
                    value={category}
                    onChange={
                        e =>
                            setCategory(
                                e.target.value
                            )
                    }
                >
                    <option value="">
                        Todas
                    </option>

                    {
                        categories.map(c => (

                            <option
                                key={c}
                            >
                                {c}
                            </option>

                        ))
                    }

                </select>
<br /> <br />
                <input
                    type="date"
                    value={date}
                    onChange={
                        e =>
                            setDate(
                                e.target.value
                            )
                    }
                />

            </div>
<br /> <br />
            <table>

                <thead>

                    <tr>

                        <th>
                            Usuario
                        </th>

                        <th>
                            Categoría
                        </th>

                        <th>
                            Recomendación
                        </th>

                        <th>
                            Fecha
                        </th>

                        <th>
                            Score
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                        filtered.map(r => (

                            <tr key={r.id}>

                                <td>
                                    {r.user?.name || "Sin usuario"}
                                </td>

                                <td>
                                    {r.category}
                                </td>

                                <td>
                                    {r.recommendation}
                                </td>

                                <td>
                                    {
                                        new Date(
                                            r.createdAt
                                        )
                                            .toLocaleDateString()
                                    }
                                </td>

                                <td>
                                    {r.score}
                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default ResultsPage;