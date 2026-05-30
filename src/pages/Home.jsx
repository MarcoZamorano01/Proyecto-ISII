import { useEffect, useState } from "react";

import RecommendationList
  from "../components/RecommendationList";

import LoadingSpinner
  from "../components/LoadingSpinner";

import VocationalForm
  from "../components/VocationalForm";

import { getCareerRecommendations }
  from "../services/aiService";

import { APP_NAME }
  from "../utils/constants";




function Home() {

  const [careers, setCareers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadRecommendations() {

      const data =
        await getCareerRecommendations();

      setCareers(data);

      setLoading(false);
    }

    loadRecommendations();

  }, []);

  return (
    <div className="container">

      <h1 className="title">
        Plataforma Vocacional IA
      </h1>
      <VocationalForm />
      <br />
      <br />
      {
        loading
          ? <LoadingSpinner />
          : <RecommendationList careers={careers} />
      }

    </div>
  );
}

export default Home;