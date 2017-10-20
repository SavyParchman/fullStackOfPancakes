SELECT exchange_reviews.exchange_name, exchange_reviews.rating, 
exchange_reviews.review, users.first_name, users.last_name
FROM exchange_reviews
JOIN users
ON exchange_reviews.poster_id = users.user_id
WHERE exchange_reviews.user_id = $1;