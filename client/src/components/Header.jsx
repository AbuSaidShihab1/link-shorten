import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [activesiderbar,setactivesidebar]=useState(false);
    const [active_header,setactve_header]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 0){
                setactve_header(true)
            }else{
                setactve_header(false)
            }
        })
    },[])
  return (
    <header className={active_header ? 'px-[20px] fixed top-0 left-0 bg-white shadow-xl lg:px-[120px] font-poppins py-[20px] w-full h-[12vh] flex justify-between items-center  z-[100000]':'px-[20px] lg:px-[120px] font-poppins py-[20px] bg-[#FBFBFB] w-full h-[12vh] flex justify-between items-center z-[100000]'}>
        <div className="logo z-[1000]">
            <h2 className='text-[20px] lg:text-[22px] text-[#2C4FD8] font-[600]'><NavLink to="/">cashurlusa</NavLink></h2>
        </div>
        <nav className='lg:flex hidden  justify-center items-center gap-[50px]'>
            <ul className='flex justify-center items-center gap-[30px]'>
                <li className='text-black text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Home</NavLink>
                </li>
                <li className='text-black  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Publisher Rates</NavLink>
                </li>
                <li className='text-black text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Blog</NavLink>
                </li>
                <li className='text-black text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink to="/login">Log In</NavLink>
                </li>
            
            </ul>
           <div className='flex justify-center items-center gap-[15px]'>
          <NavLink to="/login">
             <button className='px-[22px] py-[10px] bg-[#2C4FD8] text-[16px] text-white rounded-[5px]'>
             Sign Up
            </button>
          </NavLink>
           </div>
        </nav>
        {/* ----------------responsive------------- */}
        <nav className={activesiderbar ? 'lg:hidden fixed top-0 right-0 w-[50%] transition-all duration-200 z-[100000] h-[100vh] bg-white ':'lg:hidden fixed top-0 right-[-120%] w-[50%] z-[100000] h-[100vh] transition-all duration-200 bg-white '}>
            <div className='w-full p-[20px] flex justify-end items-center'>
               <IoClose className='cursor-pointer text-[25px]'onClick={()=>{setactivesidebar(false)}}/>
            </div>
            <ul className='flex justify-center items-center flex-col gap-[10px]'>
                <li className='text-black font-[500]  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Home</NavLink>
                </li>
                <li className='text-black font-[500]  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Publisher Rates</NavLink>
                </li>
                <li className='text-black font-[500]  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink>Blog</NavLink>
                </li>
                <li className='text-black font-[500]  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className='text-black font-[500]  text-[16px] p-[5px] before:w-0 before:h-[2px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0'>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
        {/* -------------------responsive------------- */}
        <div onClick={()=>{setactivesidebar(true)}} className="menu z-[10000] text-[25px] text-black cursor-pointer lg:hidden">
          <CgMenuRight/>
        </div>
    </header>
  )
}

export default Header