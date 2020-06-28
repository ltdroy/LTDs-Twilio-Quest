function scan(input_array){

    let contraband_count = 0

    input_array.forEach(element => {

        if (element == "contraband") {
            contraband_count = contraband_count + 1
        }

    })

     return contraband_count

}