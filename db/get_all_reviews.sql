SELECT wallet_reviews.wallet_name, wallet_reviews.rating,
wallet_reviews.review, users.username
FROM wallet_reviews
JOIN users
ON wallet_reviews.poster_id = users.user_id
WHERE wallet_reviews.user_id = wallet_reviews.poster_id;