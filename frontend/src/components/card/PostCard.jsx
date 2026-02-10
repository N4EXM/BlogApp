import React from 'react'
import { truncateText } from '../../utils/TextUtils'
import { formatToDDMMYY } from '../../utils/DateUtils'

const PostCard = ({ image, title, views, status, date, category, tags }) => {
    return (
        <div
            className='relative w-full bg-secondary h-80 flex-1 flex flex-col gap-2 rounded-md p-2.5'
        >       

            {/* status */}
            <div
                className='absolute top-3.5 right-3.5 p-1 px-1.5 bg-accent text-xs rounded text-secondary font-medium'
            >                                                                                   
                <h2>
                    {status}
                </h2>
            </div>

            {/* image */}
            <div
                className='w-fit h-fit aspect-video rounded-md'
            >
                <img   
                    src={image}
                    className='rounded'
                    alt='postimage' 
                />
            </div>

            {/* category and date */}
            <div
                className='flex flex-row items-center justify-between w-full h-fit'
            >
                <h3
                    className='text-text/80 text-sm/tight'
                >   
                    {category}
                </h3>
                <h3
                    className='text-text/80 text-sm/tight'
                >
                    {formatToDDMMYY(date)}
                </h3>
            </div>

            {/* title */}
            <div
                className='flex w-full h-fit flex-col-reverse gap-0'    
            >
                <h2
                    className='font-medium text-text text-base/snug'
                >
                    {truncateText(title, 32)}
                </h2>
            </div>

            {/* tags */}
            <div
                className='flex flex-row items-center flex-wrap gap-1'
            >
                {
                    tags.map((tag) => (
                        <h4
                            className='bg-primary text-dark-text p-0.5 px-1.5 rounded text-sm font-medium'
                        >
                            {tag}
                        </h4>
                    ))
                }
            </div>

        </div>
    )
}

export default PostCard