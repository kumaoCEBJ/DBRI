
let localStorageCallback = null;
export function registerSaveCallback(callback) {
    localStorageCallback = callback;
}
window.addEventListener('beforeunload', async function (e) {
    if (localStorageCallback) {
        localStorageCallback();
    }
});
export function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, data);
        console.log(`Data saved to localStorage: ${key}`);
    } catch (e) {
        console.error("Failed to save data to localStorage:", e);
    }
}
export function loadFromLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error("読み込みエラー : ", e);
        return null;
    }
}
export function showConfirmation(message) {
    return confirm('現在のデータは全て上書きされます。実行しますか？');
}
export function removeDataFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error("削除失敗 : ", e);
    }
}

export function clearAllLocalStorage() {
    try {
        localStorage.clear();
    } catch (e) {
        console.error("削除失敗 : ", e);
    }
}