var items = [];

items.push({
  name: 'Item Name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});
items.push({
  name: 'Item Name 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});

items.push({
  name: 'Item Name 3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});
items.push({
  name: 'Item Name 4',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});

items.push({
  name: 'Item Name 5',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
  remaining: 5,
  price: 1000
});

exports.list = function(req, res){
  res.locals = {
      items: items
  };
  res.render('items', {
    title: 'Items'
  });
};