function calculatePower(input_array){
    return input_array.map(item => item * 2).reduce((x,y) => x + y, 0)
}

// console.log(calculatePower([2,2,9]))