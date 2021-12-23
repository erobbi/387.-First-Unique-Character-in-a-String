/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dict = {}
    for (x of s) {
        dict[x] = dict[x] + 1 || 1
    }
    let i = 0;
    for (x of s) {
        if (dict[x] === 1) return i
        i++
    }
    return -1
};
