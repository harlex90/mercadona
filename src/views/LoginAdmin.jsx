import TitleAndLogo from "../components/TitleAndLogo";
import Navbar from "../components/Navbar";
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
            navigate('/catalogue');
        }
    }, [isAuthenticated, navigate])

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
                        navigate('/catalogue');
                    }else {
                        alert("Invalid email or password")
                    }
                }
            })
    }
    
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", marginTop: "70px", marginBottom: "70px"}}>
                <TitleAndLogo/>
                <div style={{display: "flex", justifyContent: "center", flex: "2 1 10%"}}>
                    <Navbar/>
                </div>
                <div style={{display: "flex", flex: "1 1 10%"}}>

                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10%"}}>
                <div style={{marginBottom: "2%"}}>
                    <h3>
                        Login
                    </h3>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <label style={{paddingRight: "10px"}}>Email</label>
                        <input type="email" name="email" placeholder="Saisissez votre adresse email" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})}/>
            
                        <label style={{padding: "10px"}}>Password</label>
                        <input type="password" name="password" placeholder="Saisissez votre mot de passe" value={values.password} onChange={(e)=>setValues({...values, password: e.target.value})}/>
                        <div style={{display: "flex", marginTop: "2%"}}>
                                <button appearance = 'ghost' color="violet" type="submit" style={{width: 150}}>
                                    Sign in
                                </button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    );     
}





export default LoginAdmin;
