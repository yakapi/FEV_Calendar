import React, {useContext} from 'react'
import ButtonLink from "../button/button_link"
import ModalSigner from "./modal_signer"
import ModalLoger from "./modal_loger"
import { UserContext } from "../../context/userContext"
import {Link} from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase-config'

export default function Navigation() {
  const {modalState, toggleModals} = useContext(UserContext)
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch (e) {
      alert('Erreur Deconnexion')
    }
  }
    return (
      <div className="navigation">
        <Link to="/">
          <h1>FEV Calendar</h1>
        </Link>
        <div className="button_menu_board">
          <ButtonLink name="inscription" color="link_green" haveTo={() => toggleModals("signer")} location="/inscription"/>
            <ButtonLink name="connexion" color="link_green" haveTo={() => toggleModals("loger")} location="/connexion"/>
              <ButtonLink name="somehting" color="link_red" haveTo={()=> logOut()} />
        </div>
        {modalState.signerModal ? <ModalSigner /> : ""}
        {modalState.logerModal ? <ModalLoger /> : ""}
      </div>
    )
}
