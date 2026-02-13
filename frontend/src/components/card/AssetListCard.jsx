import React from 'react'

const AssetListCard = ({ name, size, date, deleteFtn, loadFile, index, arrayLength }) => {
    return (
        <div
            className={`text-text p-3 px-4 flex items-center justify-between w-full h-fit ${index % 2 !== 0 && 'bg-dark-background/4'}`}
        >
            
            {/* name */}
            <div
                className='flex gap-2 items-center w-1/4 h-full'
            >
                <i
                    className='p-1.5 bg-secondary rounded-full text-primary'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2m0-2v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V19h-14ZM19 5v5.59L16.71 8.3a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3"></path></svg>
                </i>
                <h2
                    className='font-medium'
                >
                    {name}
                </h2>
            </div>

            {/* date */}
            <div
                className='flex items-center w-1/4 h-full'
            >
                <h2>
                    {date}
                </h2>
            </div>

        </div>
    )
}

export default AssetListCard