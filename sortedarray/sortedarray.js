function sortedArray(arr1, arr2) {
    let newarray = [];
    newarray = [...arr1, ...arr2]   //es6 feature
    return newarray;

    // Using traditional for loop
    // for (let i = 0; i < arr1.length; ++i) {
    //     newarray.push(arr1[i]);
    // }
    // for (let j = 0; j < arr2.length; ++j) {
    //     newarray.push(arr2[j]);
    // }
    // return newarray;
}
console.log(sortedArray([1, 2, 3], [3, 4, 5]));