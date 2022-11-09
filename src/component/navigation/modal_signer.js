import React, {useContext, useRef, useState} from "react"
import { UserContext } from "../../context/userContext"

export default function ModalSigner(){
  const {toggleModals, inscription} = useContext(UserContext)
  //Récupération des données des inputs ajouté
  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  //Récupération du block form
  const formRef = useRef()

//Inscription avec firebase
  const firebaseInscription = async (e) => {
    e.preventDefault()
    try {
      //on attend les réponse de la function inscription du userContext
      const cred = await inscription(inputs.current[0].value, inputs.current[2].value)
      //reset valeur formulaire
      formRef.current.reset()
    } catch (err) {

    }


  }
    return (
      <div className="form_pos">
        <div className="content">
          <div onClick={()=>toggleModals('close')} className="text">Signup Form</div>
          <form ref={formRef} onSubmit={firebaseInscription}>
            <div className="field">
              <span className="fas fa-user"></span>
              <input ref={addInputs} type="email" id="email_signer" name="email_signer" />
              <label>E-mail</label>
            </div>
            <div className="field">
              <span className="fas fa-user"></span>
              <input ref={addInputs} type="text" id="name_signer" name="name_signer" />
              <label>Login</label>
            </div>
            <div className="field">
              <span className="fas fa-lock"></span>
              <input ref={addInputs} type="password" id="password_signer" name="password_signer"/>
              <label>Password</label>
            </div>
            <div className="forgot-pass"><a href="#">Forgot Password?</a></div>
            <input className="sub_log_form" id="send_signer" name="send_signer" type="submit" value="connexion" />
            <div className="signup">Not a member?
              <a href="#">signup now</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
