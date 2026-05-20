import { useState } from "react";

import questions from "../data/questions";

import careers from "../data/careers";

import QuestionCard from "./QuestionCard";

import CareerCard from "./CareerCard";

import { calculateCareer }
  from "../utils/calculateResults";

function VocationalForm() {

  const [currentQuestion, setCurrentQuestion]
    = useState(0);

  const [scores, setScores] = useState({
    technology: 0,
    design: 0,
    health: 0,
  });

  const [result, setResult]
    = useState(null);

  function handleAnswer(category) {

    const updatedScores = { ...scores };

    if (category) {
      updatedScores[category] += 1;
    }

    setScores(updatedScores);

    const nextQuestion =
      currentQuestion + 1;

    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion);

    } else {

      const bestCategory =
        calculateCareer(updatedScores);

      setResult(careers[bestCategory]);
    }
  }

  function restartTest() {

    setCurrentQuestion(0);

    setScores({
      technology: 0,
      design: 0,
      health: 0,
    });

    setResult(null);
  }

  return (
    <div>

      <h2>Test Vocacional IA</h2>

      {
        result ? (

          <div>

            <h2>
              Carrera Recomendada
            </h2>

            <CareerCard
              title={result.title}
              description={result.description}
              score={result.score}
            />

            <button onClick={restartTest}>
              Reiniciar Test
            </button>

          </div>

        ) : (

          <QuestionCard
            question={
              questions[currentQuestion]
            }
            onAnswer={handleAnswer}
          />

        )
      }

    </div>
  );
}

export default VocationalForm;