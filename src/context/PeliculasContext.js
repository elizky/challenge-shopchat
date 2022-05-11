import { createContext, useState } from 'react';

const PeliculasContext = createContext({})

export function PeliculasContextProvider({ children }) {
    const [busqueda, setBusqueda] = useState('marvel')
    return (
        <PeliculasContext.Provider value={{ busqueda, setBusqueda }}>
            {children}
        </PeliculasContext.Provider>)

}


export default PeliculasContext