const { Router } = require("express");
const auth = require('../../middlewares/auth');
const path =require('path');

const router = Router();

router.get('/', async (req, res) => {
    const user = await req.session.user;
    if (user) {
      return res.redirect('/main');
    }
    else {
      return res.sendFile(path.resolve(__dirname,'../../public/login.html'));
    }
  });
  
  router.get('/main', auth, async (req, res) => {
    const user = await req.session.user;
    console.log(user);
    res.render('index', { sessionUser: user ,logout: false});
  });
  
  router.get('/logout', auth, async (req, res) => {
    const user = await req.session.user;
    try {
      req.session.destroy(err => {
        if (err) {
          console.log(err);
          res.clearCookie('my-session');
          res.redirect('/')
        }
        else {
          res.clearCookie('my-session');
          res.render('index', { sessionUser: user ,logout: true});
        }
      })
    }
    catch(err) {
      console.log(err);
    }
  });
  
  router.get('/unauthorized', (req, res) => {
    res.status(401).sendFile(path.resolve(__dirname,'../../public/unauthorized.html'));
  });
  
  router.get('/error', (req, res) => {
    res.status(500).sendFile(path.resolve(__dirname,'../../public/error.html'));
  });
  
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    req.session.user = email
    req.session.save((err) => {
      if (err) {
        console.log("Session error => ", err);
        return res.redirect('/error');
      }
      res.cookie('email', email)
      res.redirect('/');
    })
  });
  
  
  module.exports = router;






  /* 
  
  



const { Router } = require("express");
const auth = require('../../middlewares/auth');
const router = Router();

router.get('/', async (req, res) => {
    const user = await req.session.user;
    if (user) {
      return res.redirect('/main');
    }
    else {
      return res.sendFile(__dirname+'/public/login.html');
    }
  });
  
  router.get('/main', auth, async (req, res) => {
    const user = await req.session.user;
    console.log(user);
    res.render('index', { sessionUser: user ,logout: false});
  });
  
  router.get('/logout', auth, async (req, res) => {
    const user = await req.session.user;
    try {
      req.session.destroy(err => {
        if (err) {
          console.log(err);
          res.clearCookie('my-session');
          res.redirect('/')
        }
        else {
          res.clearCookie('my-session');
          res.render('index', { sessionUser: user ,logout: true});
        }
      })
    }
    catch(err) {
      console.log(err);
    }
  });
  
  router.get('/unauthorized', (req, res) => {
    res.status(401).sendFile(__dirname+'/public/unauthorized.html');
  });
  
  router.get('/error', (req, res) => {
    res.status(500).sendFile(__dirname+'/public/error.html');
  });
  
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    req.session.user = email
    req.session.save((err) => {
      if (err) {
        console.log("Session error => ", err);
        return res.redirect('/error');
      }
      res.cookie('email', email)
      res.redirect('/');
    })
  });
  
  
  module.exports = router;




  
  */