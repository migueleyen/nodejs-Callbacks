function placeanOrder(order) {
  console.log("Customer Order : ", order);

  //Async Callback - setTimeout(callback,3000);
  /*   setTimeout(function () {
    console.log("Delivery Food Order : ", order);
  }, 3000); */

  cookAndDeliverFood(function () {
    console.log("Delivery Food Order : ", order); // Triger o Eject
  });
}

function cookAndDeliverFood(callback2) {
  //   callback2; // Dont  Handler Function()
  //callback2(); // Sync Event Handler ()
  setTimeout(callback2, 3000); // Asyng TimerHandler ()
}

placeanOrder(1);
placeanOrder(2);
placeanOrder(3);
placeanOrder(4);
placeanOrder(5);
placeanOrder(6);

/* Sync Callback
function greeting(callback) {
  callback();
}

greeting(function () {
  console.log("Hi, I could take your orders?");
}); 
*/
