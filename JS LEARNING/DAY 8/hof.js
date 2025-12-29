function double (){
    function execute(){
        console.log("execute is working ");
    }
    return execute;
}

const n = double();
console.log(n);
 n();
 