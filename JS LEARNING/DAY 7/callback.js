

function greeting(){
    console.log("hwllowwww");
}
function meeting(callback){
    console.log("i am going to meet someone ");
    callback();
}

meeting(greeting);