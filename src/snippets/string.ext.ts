/* eslint-disable no-extend-native */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
    getCharLength(): number;
}
// ES
Object.defineProperty(String.prototype, "getCharLength", {
    value: function getCharLength() {
        return this.split('').reduce((count, c, i) => count + (0 <= c.charCodeAt(0) && c.charCodeAt(0) <= 128 ? 1 : 2), 0);
    },
    writable: true,
    configurable: true,
});