function subStr(originalString, startIndex, length = 0) {
    let newString = "";
    if (length === 0) {
        length = originalString.length - startIndex;
        for (let i = startIndex; i <= length; ++i) {
            newString += originalString[i];
        }
    } else {
        for (let i = startIndex; i <= length; ++i) {
            newString += originalString[i];
        }
    }
    return newString;
}
console.log(subStr("Pratik", 2, 5));
