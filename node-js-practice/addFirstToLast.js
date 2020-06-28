function addFirstToLast(str_array){
    
    let firstAndLast = "";

    if (str_array.length > 0) {
        firstAndLast = str_array[0] + str_array[str_array.length - 1];
    }

    return firstAndLast
}
