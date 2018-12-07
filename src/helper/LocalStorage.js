class LocalStorage {
    set(key, value) {
        if(typeof value === "object") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value)
    }

    get(key) {
        const value = localStorage.getItem(key);
        try {
            return JSON.parse(value);
        } catch(ex) {
            return value;
        }
    }
}

export let Storage = new LocalStorage();