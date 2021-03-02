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

module.exports = {
  cookAndDeliverFood,
};
