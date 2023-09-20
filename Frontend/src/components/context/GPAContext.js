import { createContext } from "react"; 

export const GPAContext = createContext();

export const gpaReducer = (state, action) => {  
    switch (action.type) {
        case 'ADD_COURSE':
            return { courses: [...state.courses, action.payload] }
        case 'REMOVE_COURSE':
            return { courses: state.courses.filter(course => course.id !== action.payload) }
        case 'UPDATE_COURSE':
            return { courses: state.courses.map(course => course.id === action.payload.id ? action.payload : course) }
        default:
            return state
    }
}

export const GPAProvider = ({children}) => {
    return (
     <GPAContext.Provider>{children}
     </GPAContext.Provider>
    )
}
