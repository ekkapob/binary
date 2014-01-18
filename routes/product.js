var products = [];

// products.push({
//   name: 'Item Name',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
//   sex: 'women'
//   category: 'dress',
//   remaining: 5,
//   sizes: {
//     [{
//       size: 'S',
//       remaining: 10
//     }, {
//       size: 'M',
//       remaining: 5
//     }, {
//       size: 'XL',
//       remaining: 3
//     }]
//   }
// });

products.push({
  name: 'Item Name 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});

products.push({
  name: 'Item Name 3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});

exports.index = function(req, res) {
  res.locals = {
    products: products
  };
  res.render('products/index', {
    title: 'Products'
  });
};

exports.new = function(req, res) {
  res.render('products/new', {
    title: 'Add new product'
  });
};

exports.show = function(req, res) {
  res.end('Req ID: ' + req.params.id);
};

exports.create = function(req, res) {
  res.end(req.body.name + ':' + req.body.desc + ':' + req.body.price)
};