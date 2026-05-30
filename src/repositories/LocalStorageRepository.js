import { v4 as uuid } from "uuid";

class LocalStorageRepository {

    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    getAll() {
        return JSON.parse(
            localStorage.getItem(this.storageKey)
        ) || [];
    }

    getById(id) {

        return this.getAll().find(
            item => item.id === id
        );
    }

    create(entity) {

        const data = this.getAll();

        const newEntity = {
            ...entity,
            id: uuid()
        };

        data.push(newEntity);

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(data)
        );

        return newEntity;
    }

    update(id, entity) {

        const data =
            this.getAll().map(item =>
                item.id === id
                    ? { ...item, ...entity }
                    : item
            );

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(data)
        );
    }

    delete(id) {

        const data =
            this.getAll().filter(
                item => item.id !== id
            );

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(data)
        );
    }
}

export default LocalStorageRepository;