function QuestionCard({
  question,
  onAnswer,
}) {
  return (
    <div className="career-card">

      <h3>{question.question}</h3>

      <div className="button-group">

        <button
          className="btn-yes"
          onClick={() =>
            onAnswer(question.category)
          }
        >
          Sí
        </button>

        <button
          className="btn-no"
          onClick={() =>
            onAnswer(null)
          }
        >
          No
        </button>

      </div>

    </div>
  );
}

export default QuestionCard;