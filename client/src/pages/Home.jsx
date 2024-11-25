import React, { useState } from 'react'
import Header from '../components/Header'
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Footer from '../components/Footer';
import link_img from "../assets/link.png"
import link_img2 from "../assets/link2.png"
import money1 from "../assets/money.png"
import money2 from "../assets/dollar.png"
import { MdContentCopy } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import axios from "axios"
const Home = () => {
    const [originalurl,setoriginalurl]=useState("");
    const [url_data,seturl_data]=useState();
    const [copy_url,setcopy_url]=useState(false)
      const handle_form=(e)=>{
        e.preventDefault();
        if(!originalurl==""){
            axios.post("https://lisk-shortner-backend-1.onrender.com/url-shorten",{originalurl})
            .then((res)=>{
                console.log(res);
                seturl_data(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
      };
      const handle_copy=()=>{
        setcopy_url(true);
        setTimeout(() => {
        setcopy_url(false); 
        }, 2000);
      }
  return (
    <section className='font-poppins overflow-y-hidden'>
        <section className='w-full h-[100vh] '>
       
            <Header/>
            {/* =======================hero section===================== */}
            <section className='w-full h-[88vh] relative bg-white flex font-jost justify-center items-center z-[10000]'>
                  <div>
                    <img className='absolute top-[20%] right-[10%] w-[40px] animate-spin-slow' src={link_img} alt="" />
                  </div>
                  <div>
                    <img className='absolute bottom-[30%] left-[10%] w-[40px] animate-spin-slow' src={link_img2} alt="" />
                  </div>
                  <div>
                    <img className='absolute bottom-[20%] right-[20%] w-[40px] animate-spin-slow' src={money1} alt="" />
                  </div>
                  <div>
                    <img className='absolute top-[10%] left-[20%] w-[40px] animate-spin-slow' src={money2} alt="" />
                  </div>
                 <div className='text-center w-[90%] lg:w-[45%]  z-[10000]'>
                    <h1 className='text-[25px] lg:text-[30px] font-[700]  text-black'>Unlock the Power of Shortened URLs</h1>
                    <h3 className='text-[17px] lg:text-[20px] mb-[20px] lg:mb-[30px]  text-neutral-600 font-[400]'>Earn up to 5$ / 1000 views</h3>
                    {/* <div className='w-full h-[55px] overflow-hidden  flex justify-center items-center  rounded-full'>
                        <input type="text"placeholder='Your URL Here' className='w-[75%] outline-none border-[1px] text-[#495057] border-[#ced4da] lg:text-[17px] text-[15px] rounded-l-full h-[55px] placeholder-[#495057] p-[15px] lg:p-[20px]' />
                        <button className='w-[25%] flex justify-center items-center gap-[8px] text-[12px] lg:text-[16px] font-[600] text-white h-[55px] bg-[#375DDF]'>SHORTEN <IoMdArrowRoundForward className='text-[20px]'/></button>      
                    </div> */}
                    <form onSubmit={handle_form} className='w-full h-[55px] overflow-hidden relative flex justify-center items-center bg-white shadow-xl border-[1px] border-[#eee]'>
                            <input type="text"onChange={(e)=>{setoriginalurl(e.target.value)}} placeholder='🔗 Your URL Here'className='w-[100%] outline-none h-[55px] text-[17px] p-[15px]' />
                            <button className='w-[25%] h-[100%] absolute top-0 right-0 bg-[rgb(74,0,224)] text-[17px] text-white'>
                              Shorten
                                </button>
                                {/* <button>
                                    <HiRefresh/>
                                </button> */}
                    </form>
                    {
                        url_data ? <div className='w-full relative mt-[5px] flex justify-between items-center h-[50px] pl-[15px] bg-[#170A66] rounded-[5px]'>
                        <a href={`${url_data.redirecturl}`} target="_blank">
                        <h2 className='text-white text-[17px] hover:text-indigo-400 hover:underline'>http://localhost:5173/{url_data.shorturl}</h2>
                        </a>
                           <div className='absolute top-0 right-0 w-[20%] h-[100%] '>
                             <button onClick={handle_copy} className='w-full h-[100%] bg-[#79B941] flex justify-center items-center text-[30px] text-white'>
                                {copy_url ? <FaCheck/>:<MdContentCopy/>}
                             </button>
                           </div>
                         </div>:""
                    }
                    
                 </div>
            </section>
            {/* ==========================hero section==================== */}
        </section>
        {/* -----------------Numbers Speaks Everything------------------- */}
        <section className='px-[15px] lg:px-[120px] pb-[10px]'>
            <div className=''>
                <h1 className='text-center text-[16px] text-[#666e82] font-[600]'>Numbers Speaks Everything</h1>
            </div>
            <section className='py-[50px] flex lg:justify-between justify-start items-center lg:flex-row flex-col gap-[20px]'>
                <div className='text-left lg:text-center w-[100%] lg:w-[25%]'>
                    <h1 className='font-[700] text-[#2e3d62] text-[35px] lg:text-[60px] lg:leading-[65px]'>802,310</h1>
                    <p className='text-[16px] text-[#666e82] font-[500]'>Total Clicks</p>
                </div>
                <div className='text-left lg:text-center w-[100%] lg:w-[25%]'>
                    <h1 className='font-[700] text-[#2e3d62] text-[35px] lg:text-[60px] lg:leading-[65px]'>60,151</h1>
                    <p className='text-[16px] text-[#666e82] font-[500]'> Total URLs</p>
                </div>
                <div className='text-left lg:text-center w-[100%] lg:w-[25%]'>
                    <h1 className='font-[700] text-[#2e3d62] text-[35px] lg:text-[60px] lg:leading-[65px]'>2,583</h1>
                    <p className='text-[16px] text-[#666e82] font-[500]'>Registered users</p>
                </div>
                <div className='text-left lg:text-center w-[100%] lg:w-[25%]'>
                    <h1 className='font-[700] text-[#2e3d62] text-[35px] lg:text-[60px] lg:leading-[65px]'>3266</h1>
                    <p className='text-[16px] text-[#666e82] font-[500]'>Sites</p>
                </div>
            </section>
        </section>
        {/* -----------------services section---------------- */}
        <section className='w-full h-auto bg-[#F4F1F9] px-[15px] lg:px-[120px] py-[50px] lg:py-[80px]'>
               <div className='w-[100%] lg:w-[50%] m-auto'>
                <h1 className='text-center font-[700] mb-[10px] text-[30px] lg:text-[46px] text-[#2e3d62]'>How It Works</h1>
                <div className='w-[20px] rotate-[135deg] m-auto mb-[10px] h-[20px] bg-[#EB8055]'></div>
                <p className='text-[14px] lg:text-[16px] text-[#666e82] font-[500] text-center'>cashurlusa is a completely free tool where you can create short links, which apart from being free, you get paid!</p>
               </div>
               {/* ---------------------service box------------ */}
                <section className='mt-[50px] flex justify-center items-center gap-[20px] lg:gap-[50px] lg:flex-row flex-col'>
                    <div className='w-[100%] lg:w-[30%] h-auto p-[35px] shadow-lg group hover:bg-[#6BD8D3] transition-all duration-300 hover:text-white bg-white rounded-[5px]'>
                        <div className='flex justify-between items-center'>
                              <FaUserPlus className='text-[#6BD8D3] text-[50px] lg:text-[70px] group-hover:text-white'/>
                              <h2 className='text-[50px] text-neutral-100 font-[400]'>01</h2>
                        </div>
                        <h1 className='text-[22px] lg:text-[25px] mt-[20px] text-[#3f345f] font-[700] group-hover:text-white'>CREATE AN ACCOUNT</h1>
                        <p className='text-[14px] text-[#7d8b9b] mt-[20px] leading-[25px] group-hover:text-white'>In order to get started with cashurlusa, at first all you need is cashurlusa Account & you can create it by sign-up option.</p>
                    </div>
                    <div className='w-[100%] lg:w-[30%] h-auto p-[35px] shadow-lg group hover:bg-[#9364D4] transition-all duration-300 hover:text-white bg-white rounded-[5px]'>
                        <div className='flex justify-between items-center'>
                              <FaLink className='text-[#9364D4] text-[50px] lg:text-[70px] group-hover:text-white'/>
                              <h2 className='text-[50px] text-neutral-100 font-[400]'>02</h2>
                        </div>
                        <h1 className='text-[22px] lg:text-[25px] mt-[20px] text-[#3f345f] font-[700] group-hover:text-white'>SHORTEN YOUR LINKS & SHARE</h1>
                        <p className='text-[14px] text-[#7d8b9b] mt-[20px] leading-[25px] group-hover:text-white'>Shorten that links with cashurlusa & copy them and start sharing on any platform e.g: YouTube, Telegram, Website etc.</p>
                    </div>
                    <div className='w-[100%] lg:w-[30%] h-auto p-[35px] shadow-lg group hover:bg-[#EC80B5] transition-all duration-300 hover:text-white bg-white rounded-[5px]'>
                        <div className='flex justify-between items-center'>
                              <FaDollarSign className='text-[#EC80B5] text-[50px] lg:text-[70px] group-hover:text-white'/>
                              <h2 className='text-[50px] text-neutral-100 font-[400]'>03</h2>
                        </div>
                        <h1 className='text-[22px] lg:text-[25px] mt-[20px] text-[#3f345f] font-[700] group-hover:text-white'>EARN MONEY</h1>
                        <p className='text-[14px] text-[#7d8b9b] mt-[20px] leading-[25px] group-hover:text-white'>Here you Go, since you've shared your Shorten links and got views on it, So that you're getting paid for every view you get.check our CPM rates at Payout Rates Page.
</p>
                    </div>
                </section>


        </section>
        {/* ----------------------description section---------------- */}
        <section className='px-[15px] lg:px-[120px] py-[70px] lg:py-[200px] h-auto flex lg:flex-row flex-col gap-[40px] font-poppins'>
            <section className='w-[100%] lg:w-[50%] flex justify-center items-center'>
                <div className='w-[70%] lg:w-[80%] flex justify-center items-center h-[400px] lg:h-[350px] rotate-[40deg] bg-[#F2FCFC] rounded-[10px]'>
                    <img className='w-[90%] animate-spin-slow' src="https://cashurlusa.com/assets/images/home/hive-space-theme-power.png" alt="" />
                </div>
            </section>
            <section className='w-[100%] lg:w-[50%]'>
            <div className='w-[20px] rotate-[135deg] mb-[10px] h-[20px] bg-[#EB8055]'></div>
                     <h3 className='text-[15px] lg:text-[17px] mb-[20px] font-[600] text-[#666e82] mt-[20px]'>Providing Best Services</h3>
                     <h1 className='text-[35px] lg:text-[45px] font-[700] text-[#2e3d62] lg:leading-[55px] mb-[30px]'>Earn Money with cashurlusa</h1>
                     <h2 className='text-[20px] lg:text-[22px] text-[#666e82] mb-[20px]'>Turn your traffic into profit.</h2>
                     <ul>
                     <li className='flex  justify-start gap-[15px] text-[#666e82] mb-[15px]'>
                        <FaCheck className='text-[#EB8055] text-[22px'/>
                            <span>Highest Rates : Make the most out of your traffic with our always increasing rates.</span>
                        </li>
                        <li className='flex  justify-start gap-[15px] text-[#666e82] mb-[15px]' >
                        <FaCheck className='text-[#EB8055] text-[22px'/>
                            <span>20% Referral bonus</span>
                        </li>
                        <li className='flex  justify-start gap-[15px] text-[#666e82] mb-[15px]' >
                        <FaCheck className='text-[#EB8055] text-[22px'/>
                            <span>Low Minimum Payout</span>
                        </li>
                     </ul>
                     <button className='text-white text-[14px] lg:text-[16px] cursor-pointer bg-[#EB8055] px-[25px] py-[15px] rounded-[5px] mt-[30px]'>Learn more</button>
            </section>
        </section>
        {/* -----------------Why Should You Join Us? ------------------*/}
        <section className='px-[20px] lg:px-[120px] pb-[50px]'>
           <section className='flex justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-[30px]'>
           <div className='w-[100%] lg:w-[50%]'>
                <h1 className='text-[40px] lg:text-[60px] lg:leading-[70px] font-[700] text-[#22015a]'>Why Should You Join Us?</h1>
                <p className='text-[16px] text-[#706583] mt-[5px] lg:mt-[10px] font-[400]'>Here are some facilities we provide to our Publishers.</p>
            </div>
            <div className='w-[80%] flex justify-center items-center lg:w-[50%]'>
                <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/why.svg" alt="" />
            </div>
           </section>
           {/* --------------boxes--------------- */}
           <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-[30px]'>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/highest.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Highest rates</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>Make the highest profit from your traffic with our increasing rates.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/low.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Low minimum payout</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>You are required to earn only $5.00 to request a payment.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/payment.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Highest rates</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>We have PayPal, Paytm, Payoneer, Payeer, Perfect Money, USDT, and UPI.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="hhttps://shrtfly.com/themes/user/default/homepage/assets/img/full.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Full Page Script</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>Short thousands of the links at a time automatically using our 4 line JS code.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/withdraw.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Withdrawal</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>Daily payment frequency, withdraw your money anytime any day.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/private.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Security</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>We provide a secure platform with verifications and two-factor authentication.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/api.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>API</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>Shorten links more quickly with API and bring your creative and advanced ideas.</p>
                </div>
            </div>
            <div className='p-[15px] bg-white shadow-2xl rounded-[5px]'>
                <div>
                    <img src="https://shrtfly.com/themes/user/default/homepage/assets/img/support.svg" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <h1 className='text-[17px] font-[700] text-[#22015a]'>Support</h1>
                    <p className='text-[15px] text-[#706583] mt-[5px]'>24/7 dedicated support team for payments or any other query you may have.</p>
                </div>
            </div>
           </section>
        </section>
        {/* --------footer------------ */}
        <Footer/>
    </section>
  )
}

export default Home