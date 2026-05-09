import React from 'react'
import { Link } from 'react-router-dom'

const SidebarBtn = ({icon, name, ftn, isSelected}) => {
    return (
        <Link
            className={`rounded flex flex-row items-center gap-4 px-3 p-2 w-full h-fit font-medium hover:bg-accent duration-200 ${isSelected ? 'bg-primary text-background' : 'bg-slate-900'}`}
            to={ftn}
        >
            {icon}
            {name}
        </Link>
    )
}

export default SidebarBtn