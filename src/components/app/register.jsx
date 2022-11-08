import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/register.scss';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [state, setState] = useState([]);
    function app() {
        const { lastName, firstName, email, password } = state
        if (!lastName || !firstName || !email || !password) {
            toast("Qatorlarni To'ldiring")
        }
        else {
            axios.post('http://localhost:3001/users/register', state).then(() => {
                toast("Ro'yhatdan O'tdingiz")
            })
        }
    }
    return (
        <>
            <div className="home">
                <div className="login">
                    <div className="inp">
                        <div className="h1"><h1>Regis<b>ter.</b></h1></div>


                        <input type="text" placeholder='LastName'
                            onChange={e => setState({ ...state, lastName: e.target.value })} value={state.lastName} />


                        <input type="text" placeholder='FirstName'
                            onChange={e => setState({ ...state, firstName: e.target.value })} value={state.firstName} />


                        <input type="email" placeholder='Email Adress'
                            onChange={e => setState({ ...state, email: e.target.value })} value={state.email} />


                        <input type="password" placeholder='Password'
                            onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />


                        <Stack spacing={2} direction="row">
                            <Link><Button variant="outlined" onClick={() => app()}>Submit</Button></Link>
                            <ToastContainer />
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;