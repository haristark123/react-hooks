import { useState,useEffect } from "react"
export const useScreen=()=>{

    const [screenSize,setScreenSize]=useState();

    function checkScreenSize(){
        if (window.innerWidth>992) return setScreenSize("Large")
        else if (window.innerWidth>600 && window.innerWidth<992) return setScreenSize("medium")
        else return setScreenSize("small")
    }
    useEffect(()=>{
        window.addEventListener('resize',checkScreenSize)
        return (()=>{
            window.removeEventListener('resize')
        })
    },[])

    return screenSize
}