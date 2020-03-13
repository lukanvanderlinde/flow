import React, { useEffect, useState } from 'react'

import FirebaseApp from 'Services/FirebaseApp'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    try {
      FirebaseApp.auth().onAuthStateChanged(setCurrentUser)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
