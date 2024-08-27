import React from 'react'

import Section from '../components/Section';
import Container from '../components/Container';
import SocialMediaLinks from '../components/SocialMediaLinks';

export const Contact = () => {
  return (
    <Section className='bg-neutral-950'>
        <Container className='max-w-lg text-center'>
            <h2 className='text-green-500 mb-8'>Contact</h2>

            <div className='flex gap-4 items-center justify-center'>
                    <SocialMediaLinks src='mail' href="mailto:bakryelzzubair@gmail.com" hasBackground/>
                    <SocialMediaLinks src='telephone' href="tel:+97433787781" hasBackground/>
                    <SocialMediaLinks src='whatsap' href="https://wa.me/97471903793" hasBackground/>

            </div>

        </Container>
    </Section>
  )
}
