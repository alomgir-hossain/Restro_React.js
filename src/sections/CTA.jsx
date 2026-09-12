
import React from 'react'
import Animated from '../components/Animated'
import { ArrowRight } from 'lucide-react'
import { floatingDishes } from '../data/data'

const CTA = () => {
    return (
        <section id='cta' className='relative overflow-hidden bg-orange-500 px-6 flex flex-col justify-center items-center min-h-100 mt-44'>
            <div className='absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none'>
                {floatingDishes.map((dish) => (
                    <img key={dish.src} src={dish.src} alt={dish.alt} className={`absolute size-20 md:size-28 lg-size-35 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${dish.className}`} />
                ))}
            </div>

            <div className='relative z-10 text-center max-w-2xl mx-auto'>
                <Animated className="text-3xl md:text-[40px] font-medium text-white font-urbanist text-balance">
                    <h1>Every Meal Is Made To Be Remembered</h1>
                </Animated>

                <Animated y={20} delay={0.2}>
                    <p className='mt-4 text-white max-w-sm mx-auto'>Join us fresh ingredients, signature recipes and an unforgettable dining experience.</p>
                </Animated>

                <Animated delay={0.2} className="flex items-center justify-center">
                    <a href="#booking-process" className='flex items-center gap-2.5 bg-white text-black pl-5 pr-2 rounded-full mt-5.5 transition'>
                        Book Your Table
                        <span className='size-7 rounded-full bg-black text-white grid place-content-center'>
                            <ArrowRight size={16} />
                        </span>
                    </a>
                </Animated>
            </div>
        </section>
    )
}

export default CTA