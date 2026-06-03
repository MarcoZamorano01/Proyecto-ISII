function DataTable({
    columns,
    data,
    actions
}) {

    return (

        <table
            className="table"
        >

            <thead>

                <tr>

                    {
                        columns.map(
                            column => (

                                <th
                                    key={column}
                                >
                                    {column}
                                </th>

                            ))
                    }

                    <th>
                        Acciones
                    </th>

                </tr>

            </thead>

            <tbody>

                {
                    data.map(
                        row => (

                            <tr
                                key={row.id}
                            >

                                {
                                    Object.values(row)
                                        .slice(0,
                                            columns.length)
                                        .map(
                                            (value, index) =>

                                                <td
                                                    key={index}
                                                >
                                                    {value}
                                                </td>
                                        )
                                }

                                <td>

                                    {
                                        actions(row)
                                    }

                                </td>

                            </tr>
                        ))
                }

            </tbody>

        </table>
    );
}

export default DataTable;