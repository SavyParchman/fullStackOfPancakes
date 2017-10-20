module.exports = {
  
      postExchangeReview: function(req, res, next) {
          console.log('exchangeCtrl:', req.body.review.rating)
          req.app.get('db')
              .post_exchange_review([req.params.id, req.body.review.rating, 
                  req.body.review.review, req.body.review.exchange_name, 
                  req.body.poster_id])
              .then(response => {
                  console.log(response)
                  res.status(200).json(response)
              })
              .catch(err =>{
                  console.log(err)
                  res.status(500).json(err)
              })
  
  
      },

      getAllExReviews: function(req, res, next) {
        req.app.get('db').get_all_ex_reviews()
            .then((reviews) =>{
                return res.status(200).json(reviews)
            })
            .catch ((err) => {
                return res.status(500).json(err)
            })
    }

  }