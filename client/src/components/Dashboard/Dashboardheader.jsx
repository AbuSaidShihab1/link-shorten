import React, { useContext, useEffect,useState } from 'react'
import { PiWechatLogoFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { RxEnterFullScreen } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { Contextapi } from '../../context/Appcontext';
const Dashboradheader = () => {
    const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
    function handlesidebar(){
        setactivesidebar(!activesidebar)
    }
  return (
    <header className='w-full font-poppins h-[12vh] sticky top-0 z-[10000]  xl:h-[10vh] px-[20px] md:px-[30px] py-[10px] border-b-[1px] border-[#eee] shadow-sm flex bg-white justify-between items-center'>
       <div className='flex justify-start items-center gap-[20px]'>
         <div className="cursor-pointer text-[28px]"onClick={handlesidebar}>
        <CgMenuLeftAlt/>
        </div>
       </div>
     
  
    </header>
  )
}

export default Dashboradheader