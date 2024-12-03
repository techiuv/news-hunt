import { useState } from 'react'
import gsap from 'gsap'
import Navbar from './component/Navbar'
import Cards from './component/Cards'
import Form from './component/Form'
import './App.css'

function App() {

  const homeAnimation = () => {

  }

  const experience = new Date().getFullYear() - 2021 + ' years'

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section id='home' className='w-[100%]  h-auto lg:h-[100vh] relative flex justify-center items-center'>
          <div className='mx-auto relative w-[100%] lg:w-auto h-[100%]'>
            <img src="/img/Firefly 20240729100151 2.png" alt="Artist Yuvraj" className='h-auto md:h-[100%]  aspect-[3/4] md:aspect-auto object-cover  ' />
            <div className="bg-gradient-to-b from-transparent to-[#070707] h-32 w-full absolute bottom-0 left-0"></div>
          </div>
          <div className='absolute h-[100%] w-[100%] text-center flex justify-between lg:justify-center lg:gap-20 items-center text-transparent  top-0 left-0  -z-10 '>
            <h3 className='text-stroke-1 opacity-50 uppercase font-bold text-[10.5vw] md:text-[11.5vww]  lg:text-[150px] text-gradient-stroke mb-28'>Artist</h3>
            <h3 className='text-stroke-1 opacity-50 uppercase font-bold text-[10.5vw] md:text-[11.5vww]  lg:text-[150px] text-gradient-stroke mb-28'> Yuvraj</h3>
          </div>


        </section>


        <section id='about' className='w-[100%]'>
          <p className='text-center w-[95%] md:w-[70%] lg:w-[65%] mx-auto text-lg md:text-2xl lg:text-3xl text-[#BDBDBD] my-10 md:my-16 font-normal'>
            I am a professional artist based in bihar with an expertise of {experience} experience specializing in a variety of mediums, including charcoal, oil, acrylic, water colour and pastels. My artistic journey, shaped by self learning that enabled me to develop a unique and expressive style. Each piece I create is crafted with passion, focusing on story telling and evoking emotions in my audience.
          </p>
        </section>

        <section id='portfolio' className='w-[100%]'>

          <h3 className='text-center mx-auto text-[9vw]  lg:text-[7rem] font-bold drop-shadow-md uppercase'>featured Work</h3>

          <div className='w-[90%] md:w-3/4  mx-auto'>

            <Cards tittle={'Fallen in Love'} description={"Fallen in Love is a stunning portrayal of a fleeting moment where emotions rise to the surface without words. The eye becomes the storyteller, capturing the intensity of love so deep it dilates the very essence of one's being.The dark, expansive pupil is more than just a biological response; reflecting the sudden rush of emotion when sight meets the beloved."} year={2024} medium={'charcoal'} path={'/artworks/Yuvraj_Fallen_In_Love_11.7inch×16.5inch_charcoal_2024.jpg'} />

            <Cards tittle={'Ephemeral Life'} description={'This artwork depicts a realistic hand sculpted in charcoal, seemingly deteriorating as the top part of the fingers disintegrates into small, textured fragments. The concept highlights the inevitable truth that every birth leads to a deadline, capturing the fragile balance between existence and oblivion.'} year={2024} medium={'charcoal'} path={'/artworks/Yuvraj_The_End_11.7inch×16.5inch_charcoal_2024.jpg'} />

            <Cards tittle={'Growth'} description={"This artwork shows a tree growing from a tightly clenched stack of rugged, textured hands, symbolizing life's obstacles such as struggles and resistance. Despite these challenges, the tree emerges with resilience, its roots piercing through the fingers, representing the unstoppable spirit of growth."} year={2024} medium={'charcoal'} path={'/artworks/1000014388.jpg'} />

            
          </div>

        </section>
        <section id='contact' className='w-[100%]'>
          <Form />
        </section>
      </main>
    </>
  )
}

export default App