export const trunkString = (str: string, max = 32) => {
    if (str.length > max) {
        return str.slice(0, max) + '...'
    }
    return str
}
