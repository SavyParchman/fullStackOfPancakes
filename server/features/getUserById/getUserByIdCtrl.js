module.exports = {
  
      getUserById: function(req, res, next){
          req.app.get('db')
          .get_user_id([req.params.id])
              .then(user => res.status(200).json(user))
              .catch(err => res.status(404).json(err))
  
      },

      getUserUsername: function(req, res, next){
        req.app.get('db').get_user_username()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(404).json(err))

    }
  
  
  
  
  
  
  }