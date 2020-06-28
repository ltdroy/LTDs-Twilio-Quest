function scan(input_array){

    let output_array = [];
    let counter = 0

    input_array.forEach(element => {
        if (element == "contraband"){
            output_array.push(counter)
        }
        counter = counter + 1
    });

    return output_array

}