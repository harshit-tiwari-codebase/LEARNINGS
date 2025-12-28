function amount(amount,callback){
    console.log(`${amount}Rs Payment is inititalized`)
    console.log(`${amount}Rs payment is recieved`)
    callback();
}

function blinkit(){
    console.log("the order is start packing")
}
function zomato(){
    console.log("the order is start coking")
}

amount(1000,blinkit);