import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='w-full h-[500px] flex justify-start gap-[50px] lg:flex-row flex-col font-poppins  px-[15px] lg:px-[120px] py-[20px] lg:py-[50px] bg-[url("https://cashurlusa.com/assets/images/footer-bg.jpg")]'>
         <div className='w-[100%] lg:w-[30%]'>
            <h2 className='text-[20px] font-[600] text-white'>cashurlusa</h2>
            <p className='text-[16px] text-[#8e9ab6] mt-[10px] font-[600] leading-[25px]'>cashurlusa CashURLUSA offers you the opportunity to shorten your URLs and earn money with the highest ECPM for every link you create and share. So, shorten URLs and make yourself profitable.</p>
             <div className='mt-[30px] flex justify-start items-center gap-[10px] cursor-pointer'>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-[18px] text-[#2e3d62] bg-white'>
                   <FaFacebookF/>
                </div>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-[18px] text-[#2e3d62] bg-white'>
                   <FaTwitter/>
                </div>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-[18px] text-[#2e3d62] bg-white'>
                   <FaInstagram/>
                </div>
                <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-[18px] text-[#2e3d62] bg-white'>
                   <FaPinterestP/>
                </div>
             </div>
             <div className='flex justify-start items-center gap-[5px] mt-[15px]'>
                <MdEmail className='text-[20px] text-white'/>
                <p className='text-white '>cashurlusa@gmail.com</p>
             </div>
         </div>
         <div className='w-[100%] lg:w-[30%]'>
            <h2 className='text-[20px] font-[600] text-white'>Explore</h2>
            <ul className='mt-[10px]'>
                <li className='text-[16px] font-[500] hover:text-orange-600 transition-all duration-200 text-[#8e9ab6]'>
                    <NavLink>About</NavLink>
                </li>
                <li className='text-[16px] font-[500] mt-[10px] hover:text-orange-600 transition-all duration-200 text-[#8e9ab6]'>
                    <NavLink>Privacy Policy</NavLink>
                </li>
            </ul>
         </div>
    </footer>
  )
}

export default Footer