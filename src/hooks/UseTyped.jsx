import { useEffect, useRef } from "react"
import Typed from "typed.js"

const UseTyped = (options) => {
    const el = useRef(null)
    
    useEffect(() => {
        const typed = new Typed(el.current, options)
        return () => {
            typed.destroy()
        }
    }, [options])

    return el
}

export default UseTyped