import resultService
from "../services/resultService";

function Dashboard(){

  const results =
    resultService.getAll();

  return (

    <div>

      <h1>
        Dashboard
      </h1>

      <h3>
        Tests realizados:
        {results.length}
      </h3>

    </div>
  );
}

export default Dashboard;