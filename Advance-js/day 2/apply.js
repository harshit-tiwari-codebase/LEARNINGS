let obj = 
{
    name:"harshit",
    age:20
}

function xyz(a,b,c){
    console.log(this, a , b , c);
    
}

xyz.apply(obj,[1 , 2 , 4 ])