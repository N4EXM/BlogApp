import { useState } from 'react'

const ToggleButton = ({ toggleFtn, isActive }) => {
    
    return (
        <button
            onClick={toggleFtn}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isActive ? 'bg-primary dark:bg-dark-primary' : 'bg-secondary dark:bg-dark-secondary'
            }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isActive ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    )
}

export default ToggleButton