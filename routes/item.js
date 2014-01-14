var items = [{
              name: 'Item Name',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 5,
              price: 1000
            },
            {
              name: 'Item Name 2 ',
              description: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 10,
              price: 3000
            },
            {
              name: 'Item Name 3',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 5,
              price: 1000
            },
            {
              name: 'Item Name 4',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 5,
              price: 1000
            },
            {
              name: 'Item Name 5',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 5,
              price: 1000
            },
            {
              name: 'Item Name 6',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, provident, at ab dolore corporis sapiente possimus saepe quidem hic doloribus asperiores ut molestiae dignissimos blanditiis vero. Nulla, placeat adipisci tenetur.',
              remaining: 5,
              price: 1000
            }]

exports.list = function(req, res){
  res.locals = {
      items: items
  };
  res.render('items', { title: 'Item List' });
};