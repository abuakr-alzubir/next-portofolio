import React from 'react'
import Image from 'next/image'

const SocialMediaLinks = ({src, href, hasBackground=false}:{src:string, href?: string, hasBackground: boolean}) => {
  return (
    <a href={href} target='_blank' className={hasBackground ? 'bg-green-500 p-2 rounded-lg' : ''}>
        <Image src={`/${src}.png`} alt={src} width={24} height={24} />
    </a>
  )
}

export default SocialMediaLinks