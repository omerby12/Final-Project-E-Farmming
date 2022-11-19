const getPrice = (value) => {
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  return Number(
    addDecimals(value.reduce((acc, item) => acc + item.price * item.qty, 0))
  ).toFixed(2);
};

const groupBy = (req, list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  const orders = [...map].map(([key, value]) => ({
    orderItems: value,
    totalPrice: Number(getPrice(value)),
    user: req.user._id,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
  }));
  return orders;
};

const orderToOrders = (req, res, next) => {
  if (req.body.orderItems && req.body.orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const orders = groupBy(
      req,
      req.body.orderItems,
      (orderItem) => orderItem.farmerId
    );
    req.orders = orders;
    next();
  }
};

export { orderToOrders };
