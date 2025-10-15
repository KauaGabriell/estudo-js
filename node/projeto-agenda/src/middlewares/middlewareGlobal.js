exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

const csrf = require('csrf');

// Criar uma instância do CSRF
const csrfProtection = csrf();

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    req.flash('errors', 'Token CSRF inválido');
    return res.redirect('back');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  // Gerar token CSRF
  const secret = req.session.csrfSecret || csrfProtection.secretSync();
  req.session.csrfSecret = secret;
  res.locals.csrfToken = csrfProtection.create(secret);
  next();
};

// Middleware para verificar CSRF em rotas POST
exports.verifyCsrf = (req, res, next) => {
  if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'PATCH' ||
    req.method === 'DELETE'
  ) {
    const secret = req.session.csrfSecret;
    const token = req.body._csrf;

    if (!secret || !token || !csrfProtection.verify(secret, token)) {
      req.flash('errors', 'Token CSRF inválido');
      return res.redirect('back');
    }
  }
  next();
};
