
export class StorageService {
    get(key) {
        let data = localStorage.getItem(key);

        if (typeof data === null) return null;

        try {
            return JSON.parse(data);
        } catch (e) {
            localStorage.setItem(key, JSON.stringify(''));
            console.warm(e);
        }
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

}
