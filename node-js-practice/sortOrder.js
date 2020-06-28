input1 = process.argv[2].toLowerCase()
input2 = process.argv[3].toLowerCase()

if (input1 < input2){
    console.log(-1)
} else {
    if (input1 == input2){
        console.log(0)
    } else {
        if (input1 > input2){
            console.log(1)        
        }
    }
}