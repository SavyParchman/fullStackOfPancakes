select * from users
where users.first_name = $1 
and users.last_name = $2 
and users.password = $3;