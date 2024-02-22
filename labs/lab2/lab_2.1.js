let heighValue = 1.2;
let weightValue = 80;

let bmiValue = weightValue / (heighValue * 2);

if(bmiValue < 18.5){
    console.log("UnderWeight")
} else if(bmiValue >=18.5 && bmiValue <= 24.9){
    console.log("Normal weight")
} else if(bmiValue >= 25 && bmiValue <= 29.9){
    console.log("Overweight")
} else {
    console.log("Obsity")
}