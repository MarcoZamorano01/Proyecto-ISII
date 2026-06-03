import {
    useEffect,
    useState
}
    from "react";

import { getDashboardStats } from "../../api/dashboardApi";
import { CartesianGrid } from "recharts";
import "./DashboardPage.css";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#a855f7"];

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis
}
    from "recharts";

function DashboardPage() {

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard =
        async () => {

            const data =
                await getDashboardStats();

            setStats(data);
        };

    if (!stats)
        return <h2>Cargando...</h2>;

    return (

        <div className="dashboard-container">

            <h1 className="dashboard-title">
                📊 Dashboard
            </h1>

            <div
                className="dashboard-cards"
            >

                <div className="card">

                    <h3>
                        Usuarios
                    </h3>

                    <h1>
                        {
                            stats.totalUsers
                        }
                    </h1>

                </div>

                <div className="card">

                    <h3>
                        Preguntas
                    </h3>

                    <h1>
                        {
                            stats.totalQuestions
                        }
                    </h1>

                </div>

                <div className="card">

                    <h3>
                        Resultados
                    </h3>

                    <h1>
                        {
                            stats.totalResults
                        }
                    </h1>

                </div>

                <div className="card">

                    <h3>
                        Categorías
                    </h3>

                    <h1>
                        {
                            stats.totalCategories
                        }
                    </h1>

                </div>

            </div>

            <div
                style={{
                    height: 350
                }}
            >

                <h2>
                    Resultados por Categoría
                </h2>

                <ResponsiveContainer>

                    <PieChart>

                        <Pie
                            data={
                                stats.resultsByCategory
                            }
                            dataKey="count"
                            nameKey="category"
                            outerRadius={120}
                        >

                            {
                                stats
                                    .resultsByCategory
                                    .map(
                                        (
                                            entry,
                                            index
                                        ) => (

                                            <Cell
                                                key={
                                                    index
                                                }
                                                fill={COLORS[index % COLORS.length]}
                                            />

                                        )
                                    )
                            }

                        </Pie>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#111827",
                                border: "1px solid #3b82f6",
                                borderRadius: "10px",
                                color: "#fff"
                            }}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div
                style={{
                    height: 350
                }}
            >

                <h2>
                    Comparativa
                </h2>

                <ResponsiveContainer>

                    <BarChart
                        data={
                            stats.resultsByCategory
                        }
                    >
                        <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="category"
                        />

                        <YAxis />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#111827",
                                border: "1px solid #3b82f6",
                                borderRadius: "10px",
                                color: "#fff"
                            }}
                        />

                        <Bar
                            dataKey="count"
                            fill="#3b82f6"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default DashboardPage;