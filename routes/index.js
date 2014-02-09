var products = [];

products.push({
	name: 'Navy Blue Set',
	id: 'FAM0902141',
	description: 'ชุดน้ำงินเข้าเซ๊ทใส่สบาย เหมาะสำหรับวัดหยุดพักผ่อน ไปเดินเล่นในสวนสาธาระณะ แบบเรียบง่าย',
	created: 1391926601273,
	images: ['FAM0902141_001.jpg']
});

exports.index = function(req, res) {
	res.render('index', {
		flash: {
      message: req.flash('info'),
      warning: req.flash('warning')
    }
	});
};