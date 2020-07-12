
input_array = ["-1", "2", "3", "4", "5", "-1"]

int_array = input_array.map(x => {return parseInt(x) }  )

console.log(int_array)

abs_array = int_array.map(x => {return Math.abs(x)})

console.log(abs_array)

sign_array = int_array.map(x => {return Math.sign(x)})

console.log(sign_array)f

var min = Math.min.apply(Math, abs_array)

console.log(min)

var ismin_array = abs_array.map(x => {return x == min})

console.log(ismin_array)

var ismin_sign_array = sign_array.filter((r,i) => ismin_array[i])

console.log(ismin_sign_array)

if(ismin_sign_array.includes(1)){
    console.log(min)
} else {
    console.log(min * -1)
}

