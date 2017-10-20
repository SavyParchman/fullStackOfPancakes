module.exports = {
  
      postWalletReview: function(req, res, next){
          console.log('walletCtrl:', req.body.review.rating)
          req.app.get('db')
              .post_wallet_review([req.params.id, req.body.review.rating, 
                  req.body.review.review, req.body.review.wallet_name, req.body.poster_id])
              .then(response => {
                  console.log(response)
                  res.status(200).json(response)
              })
              .catch(err =>{
                  console.log(err)
                  res.status(500).json(err)
              })
  
  
      },

      getAllReviews: function(req, res, next){
        req.app.get('db').get_all_reviews()
            .then((reviews) =>{
                return res.status(200).json(reviews)
            })
            .catch ((err) => {
                return res.status(500).json(err)
            })
    }

  }