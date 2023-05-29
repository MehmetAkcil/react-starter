export class Cache {
    constructor() {
        this.cache = {};
    }

    set(key, data, ttlSeconds = 300) {
        const expiry = Date.now() + (ttlSeconds * 1000);
        const item = { data, expiry };
        localStorage.setItem(key, JSON.stringify(item));
    }

    get(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) {
            return null;
        }
        const item = JSON.parse(itemStr);
        if (item.expiry && item.expiry < Date.now()) {
            localStorage.removeItem(key);
            return null;
        }
        return item.data;
    }

    delete(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}
