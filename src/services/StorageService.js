// тупой класс для работы с локальным хранилищем
// никаких мыслей сюда не вкладывать!!!
// get возвращает либо null либо готовый для работы массив
// set должен принять массив и записать его в локалсторадж в виде JSON строки

export class StorageService {
    get(key) {
        let data = localStorage.getItem(key);

        if (data === null) return null;

        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    /////////////////////////////////////////////help///////////////////////////////////
    static help()
    {
        console.log(`
            тупой класс для работы с локальным хранилищем
            никаких мыслей сюда не вкладывать!!!
            get возвращает либо null либо готовый для работы массив
            set должен принять массив и записать его в локалсторадж в виде JSON строки
        `);
        console.log(`
            тупой класс для работы с локальным хранилищем
            никаких мыслей сюда не вкладывать!!!
            get возвращает либо null либо готовый для работы массив
            set должен принять массив и записать его в локалсторадж в виде JSON строки
        `);
    }

    static helpEN()
    {
        console.log(`
            A dumb class for working with local storage
            do not put any logic in here!!! 
            get returns either null or an array ready for use
            set must accept an array and write it to local storage as a JSON string
        `);
    }
}


