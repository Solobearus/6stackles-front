
export const login = (email = "321@ab.cd", password = "a1") => (

    fetch(`http://localhost:${process.env.REACT_APP_PORT_OF_GATEWAY}/auth/signin`,
        {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))
)