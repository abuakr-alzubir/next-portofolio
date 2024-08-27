import React from 'react'

import Section from '../components/Section';
import Container from '../components/Container';
import SocialMediaLinks from '../components/SocialMediaLinks';

export const Contact = () => {
  return (
    <Section className='bg-neutral-950'>
        <Container className='max-w-lg text-center'>
            <h2 className='text-green-500 mb-8'>Contact</h2>

            <div className='flex flex-col gap-4 items-center'>
                <div className='flex items-center gap-4'>
                    <SocialMediaLinks src='mail' hasBackground/>
                    <a href="mailto:bakryelzzubair@gmail.com">
                        <h4>bakryelzzubair@gmail.com</h4>
                    </a>
                </div>

                <div className='flex items-center gap-4'>
                    <SocialMediaLinks src='telephone' hasBackground/>
                    <a href="tel:+97433787781">
                        <h4>+97433787781</h4>
                    </a>
                </div>
            </div>

        </Container>
    </Section>
  )
}
