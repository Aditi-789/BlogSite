import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#DAA520' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3281/3281395.png" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }}className=' text-3xl font-bold'>TechTales</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Explore TechTales for cutting-edge insights into the tech world.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection