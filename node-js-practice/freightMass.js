function calculateMass(input_array){
    return input_array.reduce(combine_length, 0)
}

function combine_length(total, item){
    return total + item.length
}

//console.log(calculateMass(["ab","cd","de"]))