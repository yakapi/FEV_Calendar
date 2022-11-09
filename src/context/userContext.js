import { createContext, useState, useEffect } from "react"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase-config'

export const UserContext = createContext()

export function UserContextProvider(props){

  const inscription = (email ,pwd) => createUserWithEmailAndPassword(auth, email ,pwd)
  const connexion = (email , pwd) => signInWithEmailAndPassword(auth, email, pwd)
  const [currentUser, setCurrentUser] = useState()
  const [loadingDataUser, setLoadingDataUser] = useState(true)

  //Connexion-Deconnexion automatique quand on quite l'appli
    //Equivalent COMPONENT DID MOUNT
    useEffect(()=>{

      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        // on précharge les state user d'un contenu anonime ou connu
        setCurrentUser(currentUser)
        setLoadingDataUser(false)
      })

    }, [])// le tableau vide pour le mode componentDidMount

  //Modal
  const [modalState, setModalState] = useState({
    signerModal: false,
    logerModal: false
  })
  const toggleModals = modal => {
    if (modal === "signer") {
      setModalState({
        signerModal: true,
        logerModal: false
      })
    }
    if (modal === "loger") {
      setModalState({
        signerModal: false,
        logerModal: true
      })
    }
    if (modal === "close") {
      setModalState({
        signerModal: false,
        logerModal: false
      })
    }
  }
  return(
    <UserContext.Provider value={{modalState, toggleModals, inscription, currentUser}}>
      {!loadingDataUser && props.children}
    </UserContext.Provider>
  )
}
