var products = [];

products.push({
  name: 'Navy Blue Set',
  id: 'F0902141',
  description: 'ชุดน้ำงินเข้าเซ๊ทใส่สบาย เหมาะสำหรับวัดหยุดพักผ่อน ไปเดินเล่นในสวนสาธาระณะ แบบเรียบง่าย',
  created: 1391926601273,
  type: 'f',
  images: ['F0902141_1.jpg', 'F0902141_2.jpg', 'F0902141_3.jpg'],
  outfits: ['B0902141', 'M1402141']
});


exports.index = function(req, res) {

  var arrivals = [];
  for (var i = 0; i < 6; i++) {
    arrivals.push({
      name: 'Navy Blue Set',
      img: '../images/new-pd-1.png',
      description: 'ชุดน้ำงินเข้าเซ๊ทใส่สบาย เหมาะสำหรับวัดหยุดพักผ่อน ไปเดินเล่นในสวนสาธาระณะ แบบเรียบง่าย'
    });
  }

  res.locals = {
    arrivals: arrivals,
    flash: {
      message: req.flash('info'),
      warning: req.flash('warning')
    }
  };

  res.render('index', {
    partials: {
      arrivals: 'shared/_arrivals'
    }
  });
};