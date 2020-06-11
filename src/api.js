const verifyToken = (token) => {
    fetch(`http://localhost:3000/auth/verify`,
        {method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: {
            token
        }
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })
    .catch(err => console.error(err))
}