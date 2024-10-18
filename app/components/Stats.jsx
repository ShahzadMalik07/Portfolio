"use client"
import CountUp from 'react-countup';

const items = [
    { text: "Years of Experience", num: 3 },
    { text: "Total Projects", num: 8 },
    { text: "Technologies Mastered", num: 6 },
]

const Stats = () => {
    return (
        <section className="
         mt-10 
        ">
            <div className='container mx-auto pt-8'>
                <div className='flex gap-20 items-center justify-center'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-3 justify-center'>
                                <CountUp end={item.num} delay={2} duration={5} className='text-6xl text-blue-500' />
                                <p className={`${item.text.length>12?"max-w-[90px]":"max-w-[150px]"}`}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>



        </section>
    )
}

export default Stats
