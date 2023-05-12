import { useState, useEffect } from "react"

const useLocalStorage = <T extends string>(name:string, initialState: T) => {
    const [state, setState] = useState(() => localStorage.getItem(name) || initialState)

    useEffect(() => {
        localStorage.setItem(name, state);
    }, [name, state])
    
    return [state as T, setState] as const
}

export default useLocalStorage