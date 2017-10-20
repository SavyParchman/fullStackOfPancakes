module.exports = {
  
      findUser: function(req, res, next){  
          req.app.get('db').find_user([req.body.first_name, req.body.last_name])
              .then(users => {
                  if(users.length){
                      return res.status(401).json("User already exists")
                  } else {
                      next()
                  }
              })
              .catch( (err) => {
                  console.log(err)
                  res.status(500).json(err)
              })
          },
  
      createProfile: function(req, res, next){
          req.app.get('db').create_profile([ req.body.first_name, req.body.last_name, 
              req.body.password, req.body.email, req.body.username ])
              .then((user) => {
                  console.log('Success')
                  res.status(200).json(user[0])
              })
  
              .catch(() => {
                  console.log('Failure')
                  res.status(500).json('Failure')})
      },
  
      getWalletReviews: function(req, res, next){
          req.app.get('db').get_wallet_reviews([req.params.id])
              .then((reviews) =>{
                  return res.status(200).json(reviews)
              })
              .catch ((err) => {
                  return res.status(500).json(err)
              })
      },
      
      getExchangeReviews: function(req, res, next){
        req.app.get('db').get_exchange_reviews([req.params.id])
            .then((reviews) =>{
                return res.status(200).json(reviews)
            })
            .catch ((err) => {
                return res.status(500).json(err)
            })
    }
  
  }
  