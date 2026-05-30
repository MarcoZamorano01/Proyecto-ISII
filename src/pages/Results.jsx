import useCrud
    from "../hooks/useCrud";

import resultService
    from "../services/resultService";

function Results() {

    const { data } =
        useCrud(resultService);

    return (

        <div>

            <h2>
                Historial
            </h2>

            {
                data.map(item => (

                    <div
                        key={item.id}
                    >

                        <strong>
                            {
                                item.recommendation
                            }
                        </strong>

                        <p>
                            {item.date}
                        </p>

                    </div>

                ))
            }

        </div>
    );
}

export default Results;