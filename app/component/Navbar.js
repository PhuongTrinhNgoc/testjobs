"use client"
import { useState } from "react";
import Link from "next/link";
import Userinfo from "./Userinfo";
import Dropdow from "./dropdow";
const Navbar =()=>{
    const [isOpen,setIsOpen] = useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    return <>
        <div>
            <>nav</>
            {/* <Userinfo/> */}
            <button onClick={handleClick}>
                add jobs
            </button>
            {isOpen ? <Dropdow lablename='Add job' isOpen={isOpen} setIsOpen={setIsOpen}/> : null}
        </div>
    
    </>
}
export default Navbar