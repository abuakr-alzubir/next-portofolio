import React from 'react'
import Image from 'next/image'

const SocialMediaLinks = ({src, href}:{src:string, href?: string}) => {
  return (
    <a href={href} target='_blank'>
        <Image src={`/${src}.png`} alt={src} width={24} height={24} />
    </a>
  )
}

export default SocialMediaLinks