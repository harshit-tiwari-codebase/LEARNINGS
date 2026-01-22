class Sketch {
    constructor(){
        this.charecter = "dora"
        this.color = "red"

    }
    speak(){}
    eat(){}
}
//Protoype
Sketch.prototype.draw = ()=>{}
Sketch.prototype.FillColor = ()=>{}

let s1 = new Sketch();

console.log(s1);
