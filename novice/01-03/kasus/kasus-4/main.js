function calcCircumfrence (r){
    let circumfrence = 2 * Math.PI * r;
    console.log("The circumference is " + Math.round(circumfrence));
    function calcArea() {
        let area = Math.PI * r * r;
        console.log("The area is " + Math.round(area));
    }
    calcArea();
}
calcCircumfrence(100);