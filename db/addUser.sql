INSERT INTO getUser
    (username, password)
VALUES
    ($1, $2)
RETURNING *