import React from 'react'

const ViewPostCard = ({ postDetials, showView = true, toggleView  }) => {
    return (
        <div
            className={`w-2/5 h-full bg-background dark:bg-dark-background shadow-md shadow-dark-background border-r-2  absolute top-0 right-0 ${showView ? 'flex' : 'hidden'}`}
        >
            ViewPostCard
        </div>
    )
}

export default ViewPostCard