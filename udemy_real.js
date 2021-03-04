const cookAndDeliverOrder = function (order, callback) {
  console.log(`Customer Order No : ${order}`);
  const customOrder = {
    id: order,
    customer: `Customer ${order}`,
  };

  setTimeout(function () {
    callback(customOrder);
  }, 3000);
};

console.time("final");

cookAndDeliverOrder(1, function (custom) {
  console.log("Delvery Food for Table No :", custom);
});

cookAndDeliverOrder(2, function (custom) {
  console.log("Delvery Food for Table No :", custom);
  console.timeEnd("final");
});

cookAndDeliverOrder(3, function (custom) {
  console.log("Delvery Food for Table No :", custom);
});

cookAndDeliverOrder(4, function (custom) {
  console.log("Delvery Food for Table No :", custom);
});

cookAndDeliverOrder(5, function (custom) {
  console.log("Delvery Food for Table No :", custom);
});

cookAndDeliverOrder(6, function (custom) {
  console.log("Delvery Food for Table No :", custom);
  //   console.timeEnd("final");
});
