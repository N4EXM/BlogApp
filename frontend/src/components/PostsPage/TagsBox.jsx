import React, { useEffect, useState } from 'react'
import DropDownBox from './DropDownBox'
import TagBtn from '../btns/TagBtn'
import TextInput from '../inputs/TextInput'

const TagsBox = ({ handleTagChange, currentTags }) => {

    const [tags, setTags] = useState([ // the tags to be fetched from backend
        "javascript",
        "programming",
        "webdev",
        "react",
        "nodejs",
        "html",
        "css",
        "frontend",
        "backend",
        "coding",
        'finance',
        'health',
        'food',
        'science'
    ])
    const [searchInput, setSearchInput] = useState('')

    const handleTags = (selectedTag) => {

        const tagsChange = handleTagChange(selectedTag, tags)

        setTags(tagsChange)

    }

    useEffect(() => {
        console.log('fetched tags: ', tags)
    })

    return (
        <DropDownBox
            name='Tags'
        >   
            
            {/* tags container */}
            <div
                className='flex gap-2 w-full h-full bg-background p-2 px-3 rounded'
            >
                
                {
                    tags.length <= 0
                    ?   <div
                            className='w-full h-full items-center justify-center flex-col flex min-h-54 gap-4'
                        >
                            <i
                                className='p-1 rounded-full bg-rose-200 text-rose-700'
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M4.93 4.93C3.04 6.82 2 9.33 2 12s1.04 5.18 2.93 7.07c1.95 1.95 4.51 2.92 7.07 2.92s5.12-.97 7.07-2.92S22 14.67 22 12s-1.04-5.18-2.93-7.07c-3.9-3.9-10.24-3.9-14.14 0M12 4.01c1.73 0 3.46.56 4.9 1.68l-4.9 4.9-4.9-4.9A7.97 7.97 0 0 1 12 4.01m-8 8c0-1.8.6-3.5 1.68-4.9l4.9 4.9-4.9 4.9A7.92 7.92 0 0 1 4 12.01m3.1 6.32 4.9-4.9 4.9 4.9a8.014 8.014 0 0 1-9.8 0m11.22-1.41-4.9-4.9 4.9-4.9c1.09 1.4 1.68 3.1 1.68 4.9s-.6 3.5-1.68 4.9"></path></svg>
                            </i>
                            <div
                                className='flex flex-col gap-0 w-fit h-fit text-center'
                            >
                                <h2
                                    className='text-text font-medium'
                                >
                                    No tags available
                                </h2>
                                <h6
                                    className='text-sm w-60 text-text/70'
                                >
                                    Failed to load tags, try reloading the page
                                </h6>
                            </div>
                        </div>
                    :   <div
                            className='flex flex-col gap-2 w-full h-full'
                        >

                            <div
                                className='flex flex-col gap-1 w-full h-full'
                            >
                                <h4
                                    className='text-text'
                                >
                                    Selected tags: 
                                </h4>
                                <div
                                    className='flex flex-wrap gap-2 w-full h-full p-3 bg-text/10 rounded'
                                >   
                                    {
                                        currentTags.map((tag) => (
                                            <TagBtn
                                                key={tag}
                                                handleSelectTag={() => handleTags(tag)}
                                                name={tag}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <span className='w-full bg-primary h-0.5'></span>

                            <div
                                className='flex flex-col gap-1 w-full h-full'
                            >

                                <TextInput
                                    name={'Tags'}
                                    placeholder='Search tags...'
                                    text={searchInput}
                                    handleText={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                />
                                <h4
                                    className='text-text'
                                >
                                    Available tags:
                                </h4>
                                <div
                                    className='flex flex-wrap gap-2 w-full h-full p-3 bg-text/10 rounded'
                                >
                                    {
                                        tags.map((tag) => (
                                            <TagBtn
                                                key={tag}
                                                handleSelectTag={() => handleTags(tag)}
                                                name={tag}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                }

            </div>

        </DropDownBox>
    )
}

export default TagsBox