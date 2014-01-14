exports.index = function(req, res){
  res.locals = {
      title: 'This is a title'
  };
  res.render('index', { title: 'Express' });
};