const login = ({ email, password }) =>
  fetch(
    `http://localhost:${process.env.REACT_APP_PORT_OF_GATEWAY}/auth/signin`,
    {
      method: "POST",
      body: JSON.stringify({
        // "email": email,
        // "password": password
        email: "321@ab.cd",
        password: "a1",
      }),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));

const register = ({ email, password, phone }) =>
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

module.exports = {
  login,
  register,
};
