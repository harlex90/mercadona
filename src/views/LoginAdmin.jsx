
import Entete from "./Entete";


function LoginAdmin() {
    
    
    return (
        <div style={{marginTop: "30px"}}>
            <Entete/>
            <div>
                <h3 style={{display: "flex", justifyContent:"center", marginTop: "30px"}}>
                    Login
                </h3>
            </div>
            <div style={{display: "flex", justifyContent:"center", marginTop: "50px"}}>
                <form>
                    <label style={{padding: "10px"}}>Email</label>
                    <input type="email" name="email" placeholder="Saisissez votre adresse email"/>
            
                    <label style={{padding: "10px"}}>Password</label>
                    <input type="password" name="password" placeholder="Saisissez votre mot de passe" value= "coucou"/>
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