const passport = require('passport');

module.exports = app => {
      app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
      })
      );
      // app.get('/', (req, res)=> {
      //   res.send({Hi: 'Hi There, Say Hello'});
      // });
      app.get('/auth/google/callback', passport.authenticate('google'));

      app.get('/api/logout', (req, res) => {
        //res.send('U R Loged out!');
        req.logout();
        res.send(req.user);
        //JSON.stringify(req.user);
        //JSON.parse(req.user);
        //res.send(JSON.stringify(user));
        //res.send('U R Loged out!');
  //       res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('U R Loged out!\n');
      });

      app.get('/api/current_user', (req, res) => {
      //res.send(req.session);
       res.send(req.user);
      });
};
