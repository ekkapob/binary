var Busboy = require('busboy');
var fs = require('fs');
var path = require('path');
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
    title: 'Products',
    flash: {
      message: req.flash('info'),
      warning: req.flash('warning')
    }
  });
};

exports.new = function(req, res) {
  if (req.session.authenticated) {
    res.render('products/new', {
      title: 'Add new product'
    });
  } else {
    req.flash('warning', 'You must logon first.');
    res.redirect('/');
  }
};

exports.show = function(req, res) {
  res.end('Req ID: ' + req.params.id);
};

exports.create = function(imagePath) {
  return function(req, res) {

    if (req.session.authenticated) {
      var busboy = new Busboy({
        headers: req.headers,
        limits: {
          fileSize: 1 * 1024 * 1024 // 1MB
        }
      });

      var filesUploaded = [];
      var fileSize = 0;
      busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        var imageMime = /^image\/.+$/;
        if (!filename || !imageMime.test(mimetype)) {
          file.resume();
          return;
        }

        filename = filename.replace(/(.+)(?=\.)/, "$1_" + new Date().getTime());
        var filePath = path.join(imagePath, filename);
        var toBeDeleted = false;

        file.on('limit', function() {
          toBeDeleted = true;
        });

        file.on('data', function(data) {
          // while file is being read
        });

        file.on('end', function() {
          if (toBeDeleted) {
            fs.unlink(filePath);
            return;
          }
          if (filename) {
            filesUploaded.push(filename);
          }
        });

        file.pipe(fs.createWriteStream(filePath));
      });

      busboy.on('field', function(fieldname, val, valTruncated, keyTruncated) {
        req.body = req.body || {};
        req.body[fieldname] = val;
      });

      busboy.on('end', function() {
        // console.log('files uploaded: ' + filesUploaded);
        // for (var i in req.body) {
        //   console.log(i + ': ' + req.body[i]);
        // }
        // console.log(req.body.name, req.body.desc, req.body.price);
        req.flash('info', (req.body.name || 'A product') + ' has been successfully added.');
        res.redirect('/products')
      });

      req.pipe(busboy);
    } else {
      res.send(401, 'You are not authorized.');
    }
  };
}