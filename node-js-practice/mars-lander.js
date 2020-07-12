 
 let vSpeed = -50
 
 // 2 integers: rotate power. rotate is the desired rotation angle (should be 0 for level 1), power is the desired thrust power (0 to 4).
 let thrust_i = 1
 let rotate_i = 0
 let space = " "
 if(vSpeed < -40){
     thrust_i = thrust_i + 0.2
     let input_string = rotate_i.toString().concat(space).concat(thrust_i.toString())
     console.log(typeof input_string);
 } else {
     if (vSpeed >= 0){
        thrust_i = thrust_i - 0.2 
        let input_string = rotate_i.toString().concat(space).concat(thrust_i.toString())
        console.log(typeof input_string);
     }
 }