module.exports = {
  
  login: function(req, res, next){
      req.app.get('db')
          .login([req.body.first_name, req.body.last_name, req.body.password])
          .then(user => {
              if( user.length < 1){
              return res.status(401).json(user)
          }
          req.user = user[0];
          return res.status(200).json(user[0]);
          })
          .catch(err => {
              console.log(err)
              res.status(500).json(err)
          })
  }

}