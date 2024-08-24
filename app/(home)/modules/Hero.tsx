import React from 'react'
import Image from 'next/image'
import SocialMediaLinks from '../components/SocialMediaLinks'

const Hero = () => {
  return (
    <section className='py-8 md:py-16'>
        <div className='container px-4 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_24rem] gap-12 md:gap-4 items-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='mb-4 text-green-500'>Hi, I am Abubakr </h1>
                    <p className="text-netural-700 mb-8">
                        I am a <b>Frontend Developer</b> with <b>1+ years of experience</b>
                        . I enjoy crafting solutions that are <b>meaningful</b> and at the
                        same <b>challenging</b>.
                        <br />
                        <br />
                        I am <b>open for work</b>, so feel free to reach out to me.
                    </p>

                    <div className='flex gap-x-2 items-center'>
                        <Image src="/location.png" alt="location" width={24} height={24} />
                        <p>Dohan, Um garn</p>
                    </div>

                    <div className='flex gap-x-2 items-center mb-8'>
                        <div className='w-6 h-6 rounded-full bg-green-500'></div>
                        <p>Open for work</p>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <SocialMediaLinks src="linkedin" href="https://www.linkedin.com/in/bakryelzzubair" />
                        <SocialMediaLinks src="youtube" href=''/>
                        <SocialMediaLinks src="github" href='https://github.com/abuakr-alzubir'/>
                    </div>
                </div>


                <div className='relative order-1 lg:order-2'>
                    <div className='absolute top-4 left-4 rounded-lg bg-green-500 w-full h-full z-[-1] hidden lg:block'></div>
                    <Image src="/hero.jpg" alt="hero" sizes='100vw' width={0} height={0} priority className='w-full h-auto rounded-lg' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero