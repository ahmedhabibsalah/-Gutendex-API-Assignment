import React from 'react'
import background from "./images/banner-bg.jpg"
import sidePhoto from './images/book.svg'



const Hero = () => {
    return (
        <section className="bg-cover bg-centerbg-no-repeat" style={{backgroundImage:`url(${background})`}}>
            <div className="flex items-center flex-wrap gap-6">
                <div className="pl-20 pt-10" style={{flex:"1 1 42rem"}}>
                    <h3 className="text-7xl" style={{color:"#444"}}>Build your library</h3>
                    <p className="text-slate-500 text-2xl leading-loose py-4 px-0" style={{color:"#666"}}>
                        Buy two selected books and get one for free
                    </p>
                </div>
                <div className="pt-8 text-center border-none" style={{flex:"1 1 42rem"}}>
                    <div>
                        <img className="border-none pb-20" style={{height:"30rem" , width:"100%"}} src={sidePhoto} alt="side"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
