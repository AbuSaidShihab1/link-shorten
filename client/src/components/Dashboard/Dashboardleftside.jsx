import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { BiGridAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiImagesSquareBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Contextapi } from '../../context/Appcontext';
import logo from "../../assets/logo.png"
import { MdOutlineCampaign } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import { MdOutlineAvTimer } from "react-icons/md";

const Dashboardleftside = () => {
    // const {contactinfo}=useContext(Appcontext);
    const {activesidebar,setactivesidebar}=useContext(Contextapi)
    const [activesubmenu,setactivesubmenu]=useState(false);
    const [activesubmenu2,setactivesubmenu2]=useState(false);
    const [activesubmenu3,setactivesubmenu3]=useState(false);
    const [activesubmenu4,setactivesubmenu4]=useState(false);
    const [activesubmenu5,setactivesubmenu5]=useState(false);
    const [activesubmenu6,setactivesubmenu6]=useState(false);
    const [activesubmenu7,setactivesubmenu7]=useState(false);
    const [activesubmenu8,setactivesubmenu8]=useState(false);
    const [activesubmenu9,setactivesubmenu9]=useState(false);
    const [activesubmenu10,setactivesubmenu10]=useState(false);
    
    const navigate=useNavigate();
    // close sidebar
    function closesidebar(){
        setactivesidebar(false)
    }
    // logout funtion 
    const logoutfunction=()=>{
        let confirm_box=confirm("Are you sure?");
        if(confirm_box){
               const remove_itm=localStorage.removeItem("user_info");
               navigate("/")
        }
    }
  return (
    <>
    <section className={activesidebar ? 'w-[100%] z-[10000] md:block hidden border-r-[1px] border-[#eee] h-[100%] bg-[white]  relative transition-all duration-300  top-0 left-[-100%]':'w-[100%] z-[1000] h-[100%] border-r-[1px] border-[#eee]  transition-all md:block hidden duration-300 bg-[white] relative left-0 top-0 overflow-y-auto no-scrollbar'}>
           <div className='left-side w-full h-[88vh] overflow-y-auto no-scrollbar '>
                     <div>
                        <h1 className='text-[17px] py-[15px] text-center tracking-[4px] text-neutral-400 uppercase  font-[400]'>cashurlusa</h1>
                     </div>
           <div className="logo w-full pt-[30px] h-auto flex flex-col gap-[10px] justify-center items-center">
                <img className='w-[70px] ' src={logo} alt="" />
                <h2 className='text-[15px] font-[600] text-[#488BF7]'>Rahim Vai</h2>
              </div>
              <div>
                <ul className='sellerheader pt-[30px]'>
                    <li className='mb-[10px]'>
                        <NavLink to="/dashboard" className=" hover:bg-[#EEF3FF]  hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><MdOutlineAvTimer className='text-[22px] text-[#a55eea]'/> <span>Dashboard</span></NavLink>
                    </li>
                     <li className='mb-[10px]'>
                        <NavLink to="" className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><HiOutlineLink className='text-[22px] text-[#2985fd]'/> <span>Manage Links</span></NavLink>
                    </li>
                        <li className='mb-[10px]'>
                        <NavLink to="" className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex  justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><FiSettings className='text-[20px] text-[#57dba2]'/> <span>Settings</span></NavLink>
                    </li>
                     
                         <li className='mb-[10px]'>
                        <button onClick={logoutfunction}  className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500] w-full"><FiLogOut className='text-[20px] text-[#fc5c65]'/> <span>Log Out</span></button>
                    </li>
                </ul>
              </div>
           </div>
    </section>
    <section className={activesidebar ? ' z-[100000] w-[60%] md:hidden block h-[100%] bg-white fixed transition-all duration-300 shadow-boxshadow5 border-r-[1px] border-[#eee]  top-0 left-0':'z-[100000] w-[100%] h-[100%] transition-all md:hidden block duration-300 bg-white fixed left-[-100%] top-0 shadow-boxshadow5 border-r-[1px] border-[#eee]'}>
       <div onClick={closesidebar} className="cursor-pointer close absolute top-[10px] right-[30px]">
          <button className='text-[25px] hover:text-[#FF5200] transition-all duration-200'><IoClose/></button>
       </div>
       <div>
                        <h1 className='text-[17px] py-[15px] text-center tracking-[4px] text-neutral-400 uppercase  font-[400]'>cashurlusa</h1>
                     </div>
           <div className="logo w-full pt-[30px] h-auto flex flex-col gap-[10px] justify-center items-center">
                <img className='w-[70px] ' src={logo} alt="" />
                <h2 className='text-[15px] font-[600] text-[#488BF7]'>Rahim Vai</h2>
              </div>
              <div>
         <ul className='sellerheader pt-[30px] p-[20px]'>
         <li className='mb-[10px]'>
                        <NavLink to="/dashboard" className=" hover:bg-[#EEF3FF]  hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><MdOutlineAvTimer className='text-[22px] text-[#a55eea]'/> <span>Dashboard</span></NavLink>
                    </li>
                     <li className='mb-[10px]'>
                        <NavLink to="" className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><HiOutlineLink className='text-[22px] text-[#2985fd]'/> <span>Manage Links</span></NavLink>
                    </li>
                        <li className='mb-[10px]'>
                        <NavLink to="" className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex  justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500]"><FiSettings className='text-[20px] text-[#57dba2]'/> <span>Settings</span></NavLink>
                    </li>
                     
                         <li className='mb-[10px]'>
                        <button onClick={logoutfunction}  className=" hover:bg-[#EEF3FF] hover:text-[#5D87FF] flex justify-start items-center gap-[10px] pl-[20px] py-[13px] text-[#141823] text-[14px] font-[500] w-full"><FiLogOut className='text-[20px] text-[#fc5c65]'/> <span>Log Out</span></button>
                    </li>
                </ul>
              </div>
    </section>
    </>
  )
}

export default Dashboardleftside