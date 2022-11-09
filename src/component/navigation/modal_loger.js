import React, {useContext, useRef} from "react"
import { UserContext } from "../../context/userContext"
import { useNavigate } from 'react-router'


export default function ModalLoger(){
  const {toggleModals, connexion} = useContext(UserContext)
  //Récupération des données des inputs ajouté
  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }
  //Connexion firebase
  const firebaseConnexion = async (e)=>{
    e.preventDefault()
    try {
      const cred = await connexion(inputs.current[0].value, inputs.current[2].value)
      // formRef.current.reset()
      navigate("/private/content-manager")
    } catch (err) {
      //Mot de passe erreur
    }
  }
  //Récupération du block form
  const formRef = useRef()
    return (
      <div className="form_pos">
        <div class="content">
          <div onClick={()=>toggleModals('close')} class="text">Login Form</div>
          <form ref={formRef}>
            <div class="field">
              <span class="fas fa-user"></span>
              <input ref={addInputs} type="email"  id="email_loger" name="email_loger" />
              <label>Email</label>
            </div>
            <div class="field">
              <span class="fas fa-user"></span>
              <input ref={addInputs} type="text" id="name_loger" name="name_loger" />
              <label>Login</label>
            </div>
            <div class="field">
              <span class="fas fa-lock"></span>
              <input ref={addInputs} type="password" id="password_loger" name="password_loger"/>
              <label>Password</label>
            </div>
            <div class="forgot-pass"><a href="#">Forgot Password?</a></div>
            <input class="sub_log_form" id="send_loger" name="send_loger" type="submit" value="connexion" />
            <div class="signup">Not a member?
              <a href="#">signup now</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
