export function createId() {
    return 'id' + Math.random().toString(16).slice(2) + String(Date.now());
}
