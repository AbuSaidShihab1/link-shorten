import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [errortext,seterrortext]=useState("");
  const navigate=useNavigate()
  const handlesignup=(e)=>{
    e.preventDefault();
  if(!name=="" || !email=="" || !password==""){
             axios.post(`https://lisk-shortner-backend-1.onrender.com/signup`,{name,email,password})
             .then((res)=>{
                 if(res.data.success==true){
                     toast.success("Registration Successful 🎉🎉");
                     setTimeout(() => {
                      navigate("/login")
                     }, 1000);
                 }else{
                        toast.error(res.data.message)
                 }
             }).catch((err)=>{
                 toast.error(err.name)
             })
    }
  }
  return (
    <section className='font-poppins bg-[#4685FE]'>
      
        <header className='flex justify-between items-center h-[12vh] w-full px-[30px] py-[20px]'>
            <div className="logo">
                <h1 className='text-[18px] xl:text-[20px] lg:text-[22px] uppercase tracking-[4px] text-white'><NavLink to="/">cashurlusa</NavLink></h1>
            </div>
            <h2 className='hidden lg:block lg:text-[14px] font-[500] text-white'>Already have an account? <NavLink to="/login" className="before:w-0 before:h-[1px] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-white before:bottom-0 before:left-0">Log In</NavLink></h2>
        </header>
        <Toaster/>
        <section className='w-full h-auto flex py-[50px] justify-center items-center p-[20px]'>
                   <form action=""onSubmit={handlesignup} className='w-[100%] lg:w-[60%] xl:w-[35%] rounded-[5px] bg-white h-auto px-[20px] py-[40px]'>
                          <h1 className='text-center mb-[15px] text-[25px] font-[600] text-[#3e485b]'>Register</h1>
                          <div className="inp mb-[10px]">
                              <label htmlFor="" className='text-[15px] text-[#91a6c1]'>Username</label><br />
                              <input type="text"onChange={(e)=>{setname(e.target.value)}} name="" id=""placeholder='Enter your name'required className='w-full h-[50px] mt-[8px] bg-[#f5f5f5] outline-[#4D5CF2] rounded-[5px] border-[1px] border-[#eee] p-[15px] text-[15px] placeholder-neutral-500 ' />
                          </div>
                          <div className="inp mb-[10px]">
                              <label htmlFor="" className='text-[15px] text-[#91a6c1]'>Email Address</label><br />
                              <input type="email" name=""onChange={(e)=>{setemail(e.target.value)}} id=""placeholder='Enter your email'required className='w-full h-[50px] mt-[8px] bg-[#f5f5f5] outline-[#4D5CF2] rounded-[5px] border-[1px] border-[#eee] p-[15px] text-[15px] placeholder-neutral-500 ' />
                          </div>
                          <div className="inp mb-[20px]">
                              <label htmlFor=""className='text-[15px] text-[#91a6c1]'>Password</label><br />
                              <input type="password" name="" onChange={(e)=>{setpassword(e.target.value)}}id=""placeholder='Password'required className='w-full h-[50px] mt-[8px] bg-[#f5f5f5] outline-[#4D5CF2] rounded-[5px] border-[1px] border-[#eee] p-[15px] text-[15px] placeholder-neutral-500 ' />
                          </div>
                          <button className='px-[30px] w-full h-[50px] rounded-[5px] cursor-pointer text-white text-[14px] lg:text-[17px] bg-[#4D5CF2]'>
                            Resister
                          </button>
            <h2 className='text-[12px] lg:text-[14px] font-[500] mt-[20px] text-black'>Already have an account?  <NavLink to="/login" className="before:w-0 before:h-[1px] text-[#4D5CF2] relative before:absolute hover:before:w-full before:transition-all before:duration-200 before:bg-[#4D5CF2] before:bottom-0 before:left-0">Log In</NavLink></h2>

                   </form>
        </section>
    </section>
  )
}

export default Signup