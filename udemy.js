function placeanOrder(order) {
  console.log("Customer Order : ", order);

  cookAndDeliverFood(order, function (customer) {
    console.log("Deliver Food for : ", customer);
  });

  function cookAndDeliverFood(order, callback) {
    var customer = {
      order: order,
      _: `Customer ${order}`,
    };

    // setTimeout(callback(customer), 3000);
    setTimeout(function () {
      callback(customer);
    }, 3000);
  }
}

placeanOrder(1);
placeanOrder(2);
placeanOrder(3);
placeanOrder(4);
placeanOrder(5);
placeanOrder(6);
