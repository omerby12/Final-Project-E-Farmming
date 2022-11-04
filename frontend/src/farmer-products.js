const farmerProducts = [
  {
    _id: '1',
    farmer: {
      _id: '5',
      user: {},
      farmName: 'Meshek Rosenthal',
      image: '/images/meshek-rosenthal.jpg',
      reviews: {},
      rating: 4.0,
      numReviews: 11,
    },
    product: {
      _id: '1',
      name: 'Red Potato',
      image: '/images/red-potato.jpg',
    },
    price: 4.9,
    countInStock: 10,
  },
  {
    _id: '2',
    farmer: {
      _id: '4',
      user: {},
      farmName: 'Meshek Yehuda - Yavniel',
      image: '/images/meshek-yehuda-yavniel.jpg',
      reviews: {},
      rating: 3.9,
      numReviews: 17,
    },
    product: {
      _id: '3',
      name: 'White Peach',
      image: '/images/white-peach.jpg',
    },
    price: 16.9,
    countInStock: 12,
  },
  {
    _id: '3',
    farmer: {
      _id: '4',
      user: {},
      farmName: 'Meshek Yehuda - Yavniel',
      image: '/images/meshek-yehuda-yavniel.jpg',
      reviews: {},
      rating: 3.9,
      numReviews: 17,
    },
    product: {
      _id: '5',
      name: 'Maggie Tomato',
      image: '/images/maggie-tomato.jpg',
    },
    price: 24.9,
    countInStock: 12,
  },
  {
    _id: '4',
    farmer: {
      _id: '2',
      user: {},
      farmName: 'The Galilee Market',
      image: '/images/the-galilee-market.jpg',
      reviews: {},
      rating: 4.0,
      numReviews: 9,
    },
    product: {
      _id: '4',
      name: 'Sweet Potato',
      image: '/images/sweet-potato.jpg',
    },
    price: 11.9,
    countInStock: 12,
  },
  {
    _id: '5',
    farmer: {
      _id: '1',
      user: {},
      farmName: 'Meshek Yaakobovski',
      image: '/images/meshek-yaakobovski.jpg',
      reviews: {},
      rating: 4.5,
      numReviews: 12,
    },
    product: {
      _id: '4',
      name: 'Sweet Potato',
      image: '/images/sweet-potato.jpg',
    },
    price: 11.9,
    countInStock: 12,
  },
  {
    _id: '6',
    farmer: {
      _id: '3',
      user: {},
      farmName: 'Meshek Fine',
      image: '/images/meshek-fine.jpg',
      reviews: {},
      rating: 4.4,
      numReviews: 14,
    },
    product: {
      _id: '8',
      name: 'Green Pepper',
      image: '/images/green-pepper.jpg',
      price: 14.9,
      countInStock: 6,
    },
    price: 13.9,
    countInStock: 5,
  },
  {
    _id: 7,
    farmer: {
      _id: '3',
      user: {},
      farmName: 'Meshek Fine',
      image: '/images/meshek-fine.jpg',
      reviews: {},
      rating: 4.4,
      numReviews: 14,
    },
    product: {
      _id: '5',
      name: 'Maggie Tomato',
      image: '/images/maggie-tomato.jpg',
      price: 24.9,
      countInStock: 12,
    },
    price: 25.9,
    countInStock: 12,
  },
  {
    _id: 8,
    farmer: {
      _id: '1',
      user: {},
      farmName: 'Meshek Yaakobovski',
      image: '/images/meshek-yaakobovski.jpg',
      reviews: {},
      rating: 4.5,
      numReviews: 12,
    },
    product: {
      _id: '8',
      name: 'Green Pepper',
      image: '/images/green-pepper.jpg',
      price: 14.9,
      countInStock: 6,
    },
    price: 15.9,
    countInStock: 6,
  },
  {
    _id: 9,
    farmer: {
      _id: '1',
      user: {},
      farmName: 'Meshek Yaakobovski',
      image: '/images/meshek-yaakobovski.jpg',
      reviews: {},
      rating: 4.5,
      numReviews: 12,
    },
    product: {
      _id: '6',
      name: 'Tree Apple',
      image: '/images/tree-apple.jpg',
      price: 19.9,
      countInStock: 12,
    },
    price: 20.9,
    countInStock: 12,
  },
  {
    _id: 10,
    farmer: {
      _id: '4',
      user: {},
      farmName: 'Meshek Yehuda - Yavniel',
      image: '/images/meshek-yehuda-yavniel.jpg',
      reviews: {},
      rating: 3.9,
      numReviews: 17,
    },
    product: {
      _id: '6',
      name: 'Tree Apple',
      image: '/images/tree-apple.jpg',
      price: 19.9,
      countInStock: 12,
    },
    price: 20.9,
    countInStock: 12,
  },
  {
    _id: 11,
    farmer: {
      _id: '1',
      user: {},
      farmName: 'Meshek Yaakobovski',
      image: '/images/meshek-yaakobovski.jpg',
      reviews: {},
      rating: 4.5,
      numReviews: 12,
    },
    product: {
      _id: '1',
      name: 'Red Potato',
      image: '/images/red-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
  {
    _id: 13,
    farmer: {
      _id: '3',
      user: {},
      farmName: 'Meshek Fine',
      image: '/images/meshek-fine.jpg',
      reviews: {},
      rating: 4.4,
      numReviews: 14,
    },
    product: {
      _id: '1',
      name: 'Red Potato',
      image: '/images/red-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
  {
    _id: 14,
    farmer: {
      _id: '1',
      user: {},
      farmName: 'Meshek Yaakobovski',
      image: '/images/meshek-yaakobovski.jpg',
      reviews: {},
      rating: 4.5,
      numReviews: 12,
    },
    product: {
      _id: '2',
      name: 'White Potato',
      image: '/images/white-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
  {
    _id: 16,
    farmer: {
      _id: '5',
      user: {},
      farmName: 'Meshek Rosenthal',
      image: '/images/meshek-rosenthal.jpg',
      reviews: {},
      rating: 4,
      numReviews: 11,
    },
    product: {
      _id: '2',
      name: 'White Potato',
      image: '/images/white-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
  {
    _id: 17,
    farmer: {
      _id: '5',
      user: {},
      farmName: 'Meshek Rosenthal',
      image: '/images/meshek-rosenthal.jpg',
      reviews: {},
      rating: 4,
      numReviews: 11,
    },
    product: {
      _id: '3',
      name: 'White Peach',
      image: '/images/white-peach.jpg',
      price: 16.9,
      countInStock: 12,
    },
    price: 17.9,
    countInStock: 12,
  },
  {
    _id: 18,
    farmer: {
      _id: '5',
      user: {},
      farmName: 'Meshek Rosenthal',
      image: '/images/meshek-rosenthal.jpg',
      reviews: {},
      rating: 4,
      numReviews: 11,
    },
    product: {
      _id: '4',
      name: 'Sweet Potato',
      image: '/images/sweet-potato.jpg',
      price: 11.9,
      countInStock: 12,
    },
    price: 12.9,
    countInStock: 12,
  },
  {
    _id: 19,
    farmer: {
      _id: '3',
      user: {},
      farmName: 'Meshek Fine',
      image: '/images/meshek-fine.jpg',
      reviews: {},
      rating: 4.4,
      numReviews: 14,
    },
    product: {
      _id: '7',
      name: 'Orange Pepper',
      image: '/images/orange-pepper.jpg',
      price: 14.9,
      countInStock: 6,
    },
    price: 15.9,
    countInStock: 6,
  },
  {
    _id: 20,
    farmer: {
      _id: '4',
      user: {},
      farmName: 'Meshek Yehuda - Yavniel',
      image: '/images/meshek-yehuda-yavniel.jpg',
      reviews: {},
      rating: 3.9,
      numReviews: 17,
    },
    product: {
      _id: '8',
      name: 'Green Pepper',
      image: '/images/green-pepper.jpg',
      price: 14.9,
      countInStock: 6,
    },
    price: 15.9,
    countInStock: 6,
  },
  {
    _id: 23,
    farmer: {
      _id: '2',
      user: {},
      farmName: 'The Galilee Market',
      image: '/images/the-galilee-market.jpg',
      reviews: {},
      rating: 4,
      numReviews: 9,
    },
    product: {
      _id: '7',
      name: 'Orange Pepper',
      image: '/images/orange-pepper.jpg',
      price: 14.9,
      countInStock: 6,
    },
    price: 15.9,
    countInStock: 6,
  },
  {
    _id: 24,
    farmer: {
      _id: '2',
      user: {},
      farmName: 'The Galilee Market',
      image: '/images/the-galilee-market.jpg',
      reviews: {},
      rating: 4,
      numReviews: 9,
    },
    product: {
      _id: '5',
      name: 'Maggie Tomato',
      image: '/images/maggie-tomato.jpg',
      price: 24.9,
      countInStock: 12,
    },
    price: 25.9,
    countInStock: 12,
  },
  {
    _id: 26,
    farmer: {
      _id: '4',
      user: {},
      farmName: 'Meshek Yehuda - Yavniel',
      image: '/images/meshek-yehuda-yavniel.jpg',
      reviews: {},
      rating: 3.9,
      numReviews: 17,
    },
    product: {
      _id: '2',
      name: 'White Potato',
      image: '/images/white-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
  {
    _id: 27,
    farmer: {
      _id: '2',
      user: {},
      farmName: 'The Galilee Market',
      image: '/images/the-galilee-market.jpg',
      reviews: {},
      rating: 4,
      numReviews: 9,
    },
    product: {
      _id: '6',
      name: 'Tree Apple',
      image: '/images/tree-apple.jpg',
      price: 19.9,
      countInStock: 12,
    },
    price: 20.9,
    countInStock: 12,
  },

  {
    _id: 29,
    farmer: {
      _id: '3',
      user: {},
      farmName: 'Meshek Fine',
      image: '/images/meshek-fine.jpg',
      reviews: {},
      rating: 4.4,
      numReviews: 14,
    },
    product: {
      _id: '2',
      name: 'White Potato',
      image: '/images/white-potato.jpg',
      price: 4.9,
      countInStock: 10,
    },
    price: 5.9,
    countInStock: 10,
  },
];

export default farmerProducts;
