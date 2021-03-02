const { cookAndDeliverFood } = require("./_cookOrder");

function placeanOrder(order) {
  console.log("Customer Order : ", order);

  cookAndDeliverFood(order, function (customer) {
    console.log("Deliver Food for : ", customer);
  });
}

placeanOrder(1);
placeanOrder(2);
placeanOrder(3);
placeanOrder(4);
placeanOrder(5);
placeanOrder(6);
