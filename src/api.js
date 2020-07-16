
export const login = (email = "321@ab.cd", password = "a1") =>
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
        .catch(err => console.error(err))

export const verify = (token) =>
    fetch(`http://localhost:${process.env.REACT_APP_PORT_OF_GATEWAY}/auth/verify`,
        {
            method: 'POST',
            body: JSON.stringify({
                token
            }),
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(res => res.json())
        .catch(err => console.error(err))


export const register = ({ email, password, phone }) =>
    fetch(
        `http://localhost:${process.env.REACT_APP_PORT_OF_GATEWAY}/auth/signup`,
        {
            method: "POST",
            body: JSON.stringify({
                // "email": email,
                // "password": password,
                //"phone":phone
                email: "321@ab.cd",
                password: "a1",
                phone: 1234567,
            }),
            headers: { "Content-Type": "application/json" },
        }
    )
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.error(err));


export const fetchProducts = (params = {}) => {

    //TODO: export to function
    const paramsArray = [];
    Object.keys(params).map(key => paramsArray.push(`${key}=${params[key]}`))
    const paramsString = paramsArray.join('&');

    return fetch(`${process.env.REACT_APP_GATEWAY_ADRESS}/products?${paramsString}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch(err => console.error(err))
}

export const fetchProduct = (_id) =>
    fetch(`${process.env.REACT_APP_GATEWAY_ADRESS}/products/${_id}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch(err => console.error(err))

