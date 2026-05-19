import React from 'react'

const ArticleContainer = ({ 
    post
}) => {
    return (
        <div
            className='w-full h-full col-span-8 rounded overflow-y-scroll scrollbar-hide flex items-start justify-start'
        >
            
            {/* thumbnail, excerpt, category, tags, title, date */}
            <div
                className='flex flex-col gap-4 w-full h-fit'
            >

                {/* thumbnail */}
                <div
                    className='h-80 w-auto aspect-video rounded'
                >
                    <img 
                        src={post.thumbnail}
                        alt=""
                        className='w-full h-full rounded'
                    />
                </div>

                {/* excerpt, category, tags, title, date */}
                <div
                    className='flex flex-row gap-2'
                >

                </div>

            </div>

        </div>
    )
}

export default ArticleContainer