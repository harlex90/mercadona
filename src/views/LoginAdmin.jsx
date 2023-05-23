import Entete from "./Entete";
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LoginAdmin() {
    const signIn = useSignIn()
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const [values, setValues] = React.useState({email: '', password: ''})

    React.useEffect(() => {
        if(isAuthenticated()) {
            navigate('/protected');
        }
    }, [isAuthenticated])

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', values)
            .then((res)=>{
                console.log(res)
                if(res.status === 200){
                    if(signIn(
                        {
                            token: res.data.token,
                            expiresIn:10000000000,
                            tokenType: "Bearer",
                            authState: {}
                            
                        }
                    )){ 
                        navigate('/protected');
                    }else {
                        alert("Invalid email or password")
                    }
                }
            })
    }
    
    
    
    return (
        <div style={{marginTop: "30px"}}>
            <Entete/>
            <div>
                <h3 style={{display: "flex", justifyContent:"center", marginTop: "30px"}}>
                    Login
                </h3>
            </div>
            <div style={{display: "flex", justifyContent:"center", marginTop: "50px"}}>
                <form onSubmit={onSubmit}>
                    <label style={{padding: "10px"}}>Email</label>
                    <input type="email" name="email" placeholder="Saisissez votre adresse email" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})}/>
            
                    <label style={{padding: "10px"}}>Password</label>
                    <input type="password" name="password" placeholder="Saisissez votre mot de passe" value={values.password} onChange={(e)=>setValues({...values, password: e.target.value})}/>
                    <div style={{display: "flex", justifyContent:"center", marginTop: "50px"}}>
                            <button appearance = 'ghost' color="violet" type="submit" style={{width: 150}}>
                                Sign in
                            </button>
                    </div>
                </form>
            </div>
           
        </div>
    );     
}





export default LoginAdmin;