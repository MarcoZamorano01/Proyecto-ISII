function CareerCard({ title, description, score }) {
  return (
    <div className="career-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <p className="score">
        Compatibilidad: {score}%
      </p>
    </div>
  );
}

export default CareerCard;