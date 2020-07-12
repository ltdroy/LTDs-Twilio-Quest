class Ducktypium {
    constructor(color){
        
        try {

          this.color = color

          if(!["red", "blue", "yellow"].includes(this.color)){
              throw new Error("color must be one of 'red', 'blue', 'yellow'")
          }
          
        } catch(e) {
            throw e
        }

        this.calibrationSequence = [];
    }

    refract(input_color) {
        
        try {
 
            if(!["red", "blue", "yellow"].includes(input_color)){
                throw new Error("refect arguement must be one of 'red', 'blue', 'yellow'")
            }

            if(input_color == this.color){
                return(input_color)
            } else {
                if(this.color == "red" && input_color == "blue"){
                    return("purple")
                }
                if(this.color == "blue" && input_color == "red"){
                    return("purple")
                }
                if(this.color == "red" && input_color == "yellow"){
                    return("orange")
                }
                if(this.color == "yellow" && input_color == "red"){
                    return("orange")
                }
                if(this.color == "yellow" && input_color == "blue"){
                    return("green")
                }
                if(this.color == "blue" && input_color == "yellow"){
                    return("green")
                }
            }

            } catch(e) {
              throw e
          }

    }

    calibrate(input_array){

        let processed_array = input_array
                          .sort(function(a,b){return a - b})
                          .map(x => x * 3)

        this.calibrationSequence = processed_array                

    }


}

// The following would produce an error
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]