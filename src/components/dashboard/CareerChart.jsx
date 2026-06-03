import {
    Bar
}
    from "react-chartjs-2";

function CareerChart({
    results
}) {

    const grouped = {};

    results.forEach(r => {

        grouped[
            r.recommendation
        ] =
            (grouped[
                r.recommendation
            ] || 0) + 1;

    });

    return (

        <Bar

            data={{

                labels:
                    Object.keys(
                        grouped
                    ),

                datasets: [
                    {
                        label:
                            "Carreras",

                        data:
                            Object.values(
                                grouped
                            )
                    }
                ]

            }}

        />

    );
}

export default CareerChart;