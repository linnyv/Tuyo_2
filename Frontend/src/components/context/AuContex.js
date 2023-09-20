import { createContext, useReducer, useEffect } from 'react'

export const AuContext = createContext()

export const auReducer = (state, action) => {
  switch (action.type) {
    case 'Login':
      return { user: action.payload }
    case 'Logout':
      return { user: null }
    default:
      return state
  }
}

export const AuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(auReducer, { 
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'Login', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuContext.Provider>
  )

}