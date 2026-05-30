import { useState }
    from "react";

import defaultQuestions
    from "../data/defaultQuestions";

import TechnologyStrategy
    from "../strategies/TechnologyStrategy";

import HealthStrategy
    from "../strategies/HealthStrategy";

import DesignStrategy
    from "../strategies/DesignStrategy";

import RecommendationContext
    from "../strategies/RecommendationContext";

import Subject
    from "../observers/Subject";

import DashboardObserver
    from "../observers/DashboardObserver";

import HistoryObserver
    from "../observers/HistoryObserver";

import resultService
    from "../services/resultService";

function VocationalTest() {

    const [index, setIndex] =
        useState(0);

    const [scores, setScores] =
        useState({
            technology: 0,
            health: 0,
            design: 0
        });

    const [result, setResult] =
        useState(null);

    function answer(category) {

        const updatedScores = {
            ...scores
        };

        updatedScores[category]++;

        setScores(updatedScores);

        if (index + 1 <
            defaultQuestions.length) {

            setIndex(index + 1);

            return;
        }

        calculateResult(
            updatedScores
        );
    }

    function calculateResult(
        currentScores
    ) {

        const maxCategory =
            Object.keys(currentScores)
                .reduce((a, b) =>
                    currentScores[a] >
                        currentScores[b]
                        ? a : b
                );

        let strategy;

        switch (maxCategory) {

            case "technology":
                strategy =
                    new TechnologyStrategy();
                break;

            case "health":
                strategy =
                    new HealthStrategy();
                break;

            default:
                strategy =
                    new DesignStrategy();
        }

        const context =
            new RecommendationContext(
                strategy
            );

        const recommendation =
            context.execute(
                currentScores[maxCategory]
            );

        const finalResult = {

            recommendation,

            category:
                maxCategory,

            date:
                new Date()
                    .toLocaleDateString()
        };

        resultService.create(
            finalResult
        );

        const subject =
            new Subject();

        subject.subscribe(
            new DashboardObserver()
        );

        subject.subscribe(
            new HistoryObserver()
        );

        subject.notify(
            finalResult
        );

        setResult(
            finalResult
        );
    }

    const current =
        defaultQuestions[index];

    if (result) {

        return (

            <div>

                <h2>
                    Resultado
                </h2>

                <h3>
                    {
                        result.recommendation
                    }
                </h3>

            </div>
        );
    }

    return (

        <div>

            <h2>
                Test Vocacional
            </h2>

            <h3>
                {current.icon}
            </h3>

            <p>
                {current.text}
            </p>

            <button
                onClick={() =>
                    answer(
                        current.category
                    )
                }
            >
                Sí
            </button>

            <button
                onClick={() =>
                    setIndex(index + 1)
                }
            >
                No
            </button>

        </div>
    );
}

export default VocationalTest;