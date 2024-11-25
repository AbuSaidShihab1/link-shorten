import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { LuPlus } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FcShipped } from "react-icons/fc";
import { CgShoppingCart } from "react-icons/cg";
import { FiDollarSign } from "react-icons/fi";
import { TbBrandPaypal } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import axios from 'axios'
import { GoSearch } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FiTrendingUp } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiScreencastLight } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import { FcProcess } from "react-icons/fc";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { Contextapi } from '../../context/Appcontext';
import Dashboardleftside from '../../components/Dashboard/Dashboardleftside';
import Dashboradheader from '../../components/Dashboard/Dashboardheader';
import { FaMoneyBillWave } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
const pdata = [
  {
    name: 'June',
    student: 13,
    fees: 10
  },
  {
    name: 'July',
    student: 15,
    fees: 12
  },
  {
    name: 'Agust',
    student: 5,
    fees: 10
  },
  {
    name: 'September',
    student: 10,
    fees: 5
  },
  {
    name: 'October',
    student: 9,
    fees: 4
  },
  {
    name: 'November',
    student: 10,
    fees: 8
  },
];
const Dashboard = () => {
   const navigate=useNavigate();
   const user_info=JSON.parse(localStorage.getItem("user_info"));
   
   useEffect(()=>{
         if(user_info){
          navigate("/dashboard")
         }else{
          navigate("/login")
         }
   },[])
   
     const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
     const [showmodal,setmodal]=useState(false);
     const uploadpost=()=>{
                setmodal(true)
     }
    function handlesidebar(){
        setactivesidebar(!activesidebar)
    }
        useEffect(()=>{
     window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
             setactivetopbar(true)
      }else{
             setactivetopbar(false)
      }
     })
   },[]);

  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
       <section className='w-[100%] m-auto py-[20px] xl:py-[20px] px-[10px] lg:px-[30px]'>
             <h2 className='text-[22px] font-[500]'>Dashboard</h2>
             {/* -------------------box------------------------- */}
               <section className='pt-[30px] grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[30px]'>
                <div className=' px-[20px] flex justify-start gap-[20px] items-center py-[30px] bg-white shadow-lg rounded-[5px] border-[1px] border-[#eee]'>
                  <div className='w-[50px] h-[50px] rounded-full text-[#EBA43B] bg-[#f7d794] text-[25px] flex justify-center items-center'>
                       <FaMoneyBillWave/>
                  </div>
                  <div>
                    <h2 className='text-[16px] font-[600] mb-[2px] text-neutral-400'>Earnings</h2>
                    <h1 className='text-[20px] font-[600]'>$0.0000</h1>
                  </div>
                </div>
                <div className='px-[20px] flex justify-start gap-[20px] items-center py-[30px] bg-white shadow-lg rounded-[5px] border-[1px] border-[#eee]'>
                  <div className='w-[50px] h-[50px] rounded-full text-white bg-[#778beb] text-[25px] flex justify-center items-center'>
                       <FaChartSimple/>
                  </div>
                  <div>
                    <h2 className='text-[16px] font-[600] mb-[2px] text-neutral-400'>Total Views</h2>
                    <h1 className='text-[20px] font-[600]'>2000</h1>
                  </div>
                </div>
                <div className='px-[20px] flex justify-start gap-[20px] items-center py-[30px] bg-white shadow-lg rounded-[5px] border-[1px] border-[#eee]'>
                  <div className='w-[50px] h-[50px] rounded-full text-white bg-[#82ccdd] text-[25px] flex justify-center items-center'>
                       <FiLink/>
                  </div>
                  <div>
                    <h2 className='text-[16px] font-[600] mb-[2px] text-neutral-400'>Total Links</h2>
                    <h1 className='text-[20px] font-[600]'>30</h1>
                  </div>
                </div>
               </section>
             {/* -------------------box------------------------- */}
             {/* -------------------reports------------------ */}
               <section className='p-[20px] mt-[25px] w-full bg-white shadow-lg border-[1px] border-[#eee] border-dashed'>
                      <h2 className='text-[18px] font-[500]'>Reports</h2>
 <div className="flex flex-col mt-[20px]">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Views</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Earnings</th>
              <th scope="col" className="px-6 py-3 lg:block hidden text-start text-xs font-medium text-gray-500 uppercase">	Average CPM</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2024-11-01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 lg:block hidden py-4 whitespace-nowrap text-[16px] text-gray-800">0</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2024-11-01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 lg:block hidden py-4 whitespace-nowrap text-[16px] text-gray-800">0</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2024-11-01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 lg:block hidden py-4 whitespace-nowrap text-[16px] text-gray-800">0</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">2024-11-01</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 lg:block hidden py-4 whitespace-nowrap text-[16px] text-gray-800">0</td>
            </tr>
       
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

               </section>
             {/* -------------------reports------------------ */}
                    <section className='p-[20px] bg-white border-[1px] border-[#eee] mt-[20px] shadow-lg'>
                      <h1 className='text-[18px] font-[500] mb-[20px]'>Total Views</h1>
                 
                      <ResponsiveContainer width="100%" aspect={2} className="w-full ">
        <AreaChart
          height={300}
          data={pdata}
          margin={{
            top: 40,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>



                    </section>
             {/* ---------------------top 10 links----------------- */}
             <section className='p-[20px] mt-[25px] w-full bg-white shadow-lg border-[1px] border-[#eee] border-dashed'>
                      <h2 className='text-[18px] font-[500]'>Top 10 Links</h2>
 <div className="flex flex-col mt-[20px]">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Alias</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Views</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Earnings</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">https://cashurlusa.com/XsN2Ae</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none mr-[10px] bg-[#4b7bec] px-[12px] py-[6px]"> Edit</button>
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white bg-[#eb3b5a] focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none px-[12px] py-[6px]">Delete</button>
             
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">https://cashurlusa.com/XsN2Ae</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none mr-[10px] bg-[#4b7bec] px-[12px] py-[6px]"> Edit</button>
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white bg-[#eb3b5a] focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none px-[12px] py-[6px]">Delete</button>
             
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">https://cashurlusa.com/XsN2Ae</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$0.000000</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none mr-[10px] bg-[#4b7bec] px-[12px] py-[6px]"> Edit</button>
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-[4px] border border-transparent text-white bg-[#eb3b5a] focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none px-[12px] py-[6px]">Delete</button>
             
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

               </section>
       </section>
        </section>
    </section>
  )
}

export default Dashboard