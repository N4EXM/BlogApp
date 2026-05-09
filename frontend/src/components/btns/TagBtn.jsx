import React from 'react'

const TagBtn = ({ name, handleSelectTag }) => {
    return (
        <button
            className='p-1 px-2 rounded bg-secondary/70 text-text w-fit h-fit text-sm hover:text-background hover:bg-primary  duration-200 cursor-pointer'
            onClick={handleSelectTag}
            type='button'
        >
            #{name}
        </button>
    )
}

export default TagBtn