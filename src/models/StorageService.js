
export class StorageService {
    get(key) {
        let data = localStorage.getItem(key);

        if (typeof data !== 'string') {
            localStorage.setItem(key,  JSON.stringify(''));
            throw new Error('localStorage не JSON');
        }

        try {
            return JSON.parse(data);
        } catch (e) {
            localStorage.setItem(key, JSON.stringify(''));
            console.log(e);
        }
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

}
