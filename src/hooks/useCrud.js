import { useEffect, useState }
    from "react";

function useCrud(service) {

    const [data, setData] =
        useState([]);

    function load() {

        const result =
            service.getAll();

        setData(result);
    }

    useEffect(() => {
        load();
    }, []);

    function create(entity) {

        service.create(entity);

        load();
    }

    function update(id, entity) {

        service.update(id, entity);

        load();
    }

    function remove(id) {

        service.delete(id);

        load();
    }

    return {
        data,
        create,
        update,
        remove
    };
}

export default useCrud;