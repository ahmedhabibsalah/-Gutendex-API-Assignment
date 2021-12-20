/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
import {AiOutlineSearch, AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {RiEnglishInput} from 'react-icons/ri'

function TopNav() {
    return (
        <header  > 
            <div className="bg-white p-6 flex items-center justify-between" style={{padding:"2%"}}>
                <a href="#" className="text-5xl font-bold text-stone-700 ">Booksy</a>
                <form className="h-20 border-solid border-2 border-black overflow-hidden flex items-center rounded-lg" style={{width:"50rem"}}>
                    <input type="search" name="" placeholder="Search here ..." className="text-2xl py-0 px-5 normal-case text-stone-700 h-full w-full"  />
                    <label  className="text-4xl pr-6 text-stone-700 cursor-pointer fa fas-search hover:text-green-500 " ><AiOutlineSearch /></label>
                </form>
                <div className="text-5xl ml-6 text-stone-700 cursor-pointer  flex ">
                    <div className="hidden">
                        <AiOutlineSearch />
                    </div>
                    <a href="#" className="pr-6 hover:text-green-500"><AiFillHeart /></a>
                    <a href="#" className="hover:text-green-500"><FaShoppingCart /></a>
                    <a href="#" className="pl-6 hover:text-green-500"> <RiEnglishInput /></a>
                </div>
            </div>
            <div className="bg-green-500 inset-x-0 top-0 z-50">
                   <nav className="text-center">
                      <a className="text-white inline-block p-5 text-3xl hover:text-green-600" href="#">Home</a>
                      <a className="text-white inline-block p-5 text-3xl hover:text-green-600" href="#">Bestseller</a>
                      <a className="text-white inline-block p-5 text-3xl hover:text-green-600" href="#">Catagory</a>
                      <a className="text-white inline-block p-5 text-3xl hover:text-green-600" href="#">Find a store</a>
                      <a className="text-white inline-block p-5 text-3xl hover:text-green-600" href="#">Blog</a>
                   </nav>
            </div>
        </header>
        
    )
}

export default TopNav