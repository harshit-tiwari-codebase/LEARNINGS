let obj = 
{
    name:"harshit",
    age:20
}

function xyz(a,b,c){
    console.log(this,a,b,c);
    
}

let binding = xyz.bind(obj,1,2,4);
binding();