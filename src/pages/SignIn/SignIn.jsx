import React, { useState } from 'react'
import './SignIn.css'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../api";
import { userAuthSlice, userDetailsSlice } from "../../store/slices";
import { Redirect } from "react-router-dom";

const SignIn = ({ location = {} }) => {
    const { from } = location.state || { from: { pathname: '/' } }
    const { text } = useSelector(state => state.language);
    const [redirectToRefferel, setRedirectToRefferel] = useState(false);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const handleSubmit = async () => {
        const result = await login('wrong', password);
        console.log(result)

        if (!result.error) {
            dispatch(userAuthSlice.actions.setToken(result.token))
        } else {
            setError(result.error)
        }
    }

    return (
        < div className="signIn" data-testid="signIn">
            {redirectToRefferel && <Redirect to={from} />}
            {error != '' && <div className="error">error</div>}
            <div className="signIn_welcome">
                {text.sign_in.welcome}
            </div>
            <input
                type="text"
                className="signIn_input"
                placeholder={text.general.email}
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                className="signIn_input"
                placeholder={text.general.password}
                value={password}
                onChange={e => setPassword(e.target.value)} />

            <Button
                value={text.sign_in.submit}
                onClick={() => handleSubmit()}
            />
        </div >
    )
}

export default SignIn
