input_arg = process.argv[2]

if (input_arg == 0){
    console.log("alive")
} else {
    if (input_arg == 1){
        console.log("flowering")
    } else {
        if (input_arg == 2){
            console.log("shedding")
        } else {
            console.log("other")
        }
    }
}
