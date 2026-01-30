// Callback Hell Example

const orderDetails = {
    orderId: 101,
    price: 300,
    customer: {
        name: "Harshit",
        phone: "9XXXXXXXXX",
        location: {
            area: "Vijay Nagar",
            city: "Indore",
            pincode: 452010
        }
    },
    restaurant: {
        name: "Food Hub",
        location: {
            area: "Palasia",
            city: "Indore",
            pincode: 452001
        }
    },
    deliveryPartner: {
        name: "Rahul",
        vehicle: "Bike",
        currentLocation: "Restaurant"
    },
    orderItem: "Pizza",
    paymentStatus: "pending",
    orderStatus: "placed"
};

function placedOrder(orderDetails) {
    console.log(`Payment is pending of ₹${orderDetails.price}`);

   return new Promise ((resolve,reject)=>{
     setTimeout(() => {
        orderDetails.paymentStatus = "paid";
        console.log("Payment is received");
      resolve(orderDetails)
    }, 3000);
   })
}

function preparingOrder(orderDetails) {
    console.log(`Order preparation started for ${orderDetails.orderItem}`);
    return new Promise ((resolve,reject)=>{
        
    setTimeout(() => {
        orderDetails.orderStatus = "prepared";
        console.log("Order is prepared");
        resolve(orderDetails)
    }, 3000);
    })
}

function pickupOrder(orderDetails) {
    console.log(
        `Delivery boy is on the way to receive the order from ${orderDetails.restaurant.location.area}`
    );
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
        orderDetails.orderStatus = "picked up";
        console.log("Order is picked up");
        resolve(orderDetails)
    }, 3000);
    })
   
}

function deliverOrder(orderDetails) {
    console.log(
        `The order is out for delivery to ${orderDetails.customer.location.area}`
    );

    setTimeout(() => {
        orderDetails.orderStatus = "delivered";
        console.log("The order is delivered");
        console.log("Final Order Details ");
        console.log(orderDetails);
    }, 3000);
}

placedOrder(orderDetails)
.then((orderDetails)=>{return preparingOrder(orderDetails)})
.then((orderDetails)=>{return pickupOrder(orderDetails)})
.then((orderDetails)=>{return deliverOrder(orderDetails)})