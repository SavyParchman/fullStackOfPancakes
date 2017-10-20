SELECT exchange_reviews.exchange_name, exchange_reviews.rating,
exchange_reviews.review, users.username
FROM exchange_reviews
JOIN users
ON exchange_reviews.poster_id = users.user_id
WHERE exchange_reviews.user_id = exchange_reviews.poster_id;