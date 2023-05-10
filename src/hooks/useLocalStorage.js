import { useState, useEffect } from "react"

const useLocalStorage = (name, initialState) => {
    const [state, setState] = useState(() => localStorage.getItem(name) || initialState)

    useEffect(() => {
        localStorage.setItem(name, state);
    }, [name, state])
    
    return [state, setState]
}

export default useLocalStorage