import React, {useContext} from 'react'

import { UserContext } from '../../context/userContext'

import {Outlet, useLocation, Navigate} from 'react-router-dom'

export default function PrivateChecker(){
  const {currentUser} = useContext(UserContext)

  //si utilisateur pas connecté alors ...
  if (!currentUser) {
    return <Navigate to="/"/>
  }
  //si il est connecté on retourne Outlet qui renvoie à la route enfant
  return(
    <div>
    <Outlet/>
    </div>
  )
}
