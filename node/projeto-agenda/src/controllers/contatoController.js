const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {contato: {} });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();
    

    if (contato.errors.length > 0) {
      req.flash('errors', 'Você precisa fazer login');
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato Registrado com sucesso');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))

  } catch (error) {
    console.log(error);
    res.render('404')
  }
};


exports.editIndex = async function(req, res){
    if(!req.params.id) return res.render('404');
    const userContato = await Contato.buscaPorId(req.params.id)
    if(!userContato) return res.render('404');

    res.render('contato', {contato: userContato })
}