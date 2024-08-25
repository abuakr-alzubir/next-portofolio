import React from 'react'

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`mx-auto p-4 md:px-16 ${className}`}>
        {children}
    </div>
  )
}

export default Container