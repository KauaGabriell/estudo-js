const Login = require('../models/LoginModel');

exports.login = (req, res) => {
  res.render('login');
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      console.log('Erros encontrados:', login.errors);
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('index');
      });
      return;
    }

    //Mensagem de sucesso
    req.flash('success', 'Seu Usuário foi criado com sucesso!');
    req.session.save(function () {
      return res.redirect('index');
    });
  } catch (error) {
    console.log(error);
    return res.render('404');
  }
};
