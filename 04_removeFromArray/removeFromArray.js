const removeFromArray = function(array, ...args) {
    // Tried the below method without using rest parameters.
    // let arr = arguments[0];
    // for (let i = 1; i < args.length; i++) {
    //     let index;
    //     while (index != -1) {
    //         index = arr.indexOf(arguments[i]);
    //         if (index == -1) {
    //             break;
    //         }
    //         else arr.splice(index,1);
    //     }
    // }

    // Tried the same way with using rest parameters
    let arr = array;
    for (let i = 0; i < args.length; i++) {
        let index;
        // If the element that needs to be removed is present in the array, remove it else break.
        while (index != -1) {
            index = arr.indexOf(args[i]);
            if (index == -1) {
                break;
            }
            else arr.splice(index,1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
