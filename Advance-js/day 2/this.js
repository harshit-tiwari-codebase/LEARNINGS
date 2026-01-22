//global -> window
console.log(this);


// function -> window
let pan = function(){
    console.log(this);
    
}

//es5 function in object -> object
let obj = {
    name:"harshit",
    func: function(){
        console.log(this);
    
    }
}
obj.func();

// es6 function in an object -> window

let obj2 = {
   funct: ()=>{
    console.log(this);
    
   }
}

obj2.funct()

// es5 function inside es5 function inside object  -> window 

let obj3 = {
    func2 : function(){
         function abcd(){
            console.log(this);
        
        }
        abcd();
    }
}
obj3.func2();


//es6 function inside es5 function inside object -> object
let obj4 = {

    name:"harshit",
    age:20,
    func4: function(){
        let xyz =  ()=>{
            console.log(this);
            
        }
        xyz();
    }
}


obj4.func4();