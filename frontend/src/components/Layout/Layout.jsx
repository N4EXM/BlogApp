import React from 'react'

const Layout = ({ children }) => {
    return (
        <div
            className='grid grid-cols-12 font-poppins w-full bg-slate-200/50 min-h-screen p-4 items-start justify-start gap-4'
        >
            {children}
        </div>
    )
}

export default Layout