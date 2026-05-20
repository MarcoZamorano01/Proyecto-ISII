import CareerCard from "./CareerCard";

function RecommendationList({ careers }) {
  return (
    <div className="card-container">
      {careers.map((career) => (
        <CareerCard
          key={career.id}
          title={career.title}
          description={career.description}
          score={career.score}
        />
      ))}
    </div>
  );
}

export default RecommendationList;