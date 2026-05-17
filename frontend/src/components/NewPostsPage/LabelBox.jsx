import React, { useEffect, useState } from 'react'
import DropDownBox from './DropDownBox'
import TagBtn from '../btns/TagBtn'
import TextInput from '../inputs/TextInput'


const LabelBox = ({ 
    currentTags = [], 
    currentCategory = 'None', 
    handleCategoryChange 
}) => {

    // toggles
    const [isCategoryDropdownActive, setIsCategoryDropdownActive] = useState(false)
    const [isTagsDropdownActive, setIsTagsDropdownActive] = useState(false)

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
    ])
    const [categories, setCategories] = useState([
        'Health',
        'Food',
        'Coding',
        'Nature',
        'Lifestyle'
    ])
    const [searchInput, setSearchInput] = useState('')
    
    const [selectedCategory, setSelectedCategory] = useState('None' || currentCategory)
    const [selectedTags, setSelectedTags] = useState([])

    const handleCategoryClick = (cat) => {
        handleCategoryChange(cat)
        setSelectedCategory(cat)
        setIsCategoryDropdownActive(false)
    }

    return (
        <DropDownBox
            name='Category & Tags'
        >   
            
            {/* container */}
            <div
                className='flex flex-col gap-5 w-full h-full bg-background p-2 px-3 rounded '
            >

                {/* categories dropdown */}
                <div
                    className='flex flex-col w-full h-fit relative gap-1'
                >

                    <h4
                        className='text-text pl-0.5'
                    >
                        Category 
                    </h4>

                    {/* btn */}
                    <button
                        className='w-full h-fit p-2 rounded border-2 border-primary text-text text-start px-3 flex-row flex justify-between items-center font-medium cursor-pointer'
                        type='button'
                        onClick={() => setIsCategoryDropdownActive(!isCategoryDropdownActive)}
                    >
                        {selectedCategory}
                        <svg className={isCategoryDropdownActive ? 'rotate-180 mb-0.5' : 'rotate-0 mb-0.5'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9l6 6l6-6"></path>
                        </svg>
                    </button>

                    <div
                        className={`${isCategoryDropdownActive ? 'flex' : 'hidden'} w-1/2 h-fit absolute top-20 right-0 bg-background flex flex-col shadow shadow-text/50 rounded z-50`}
                    >
                        {
                            categories.map((cat, index) => (
                                <button
                                    onClick={() => handleCategoryClick(cat)}
                                    key={cat}
                                    className={`p-2 px-3 text-start duration-200 cursor-pointer font-medium 
                                        ${index === 0 && 'rounded-t'} 
                                        ${index === categories.length - 1 && 'rounded-b'}
                                        ${selectedCategory === cat ? 'bg-primary text-background' : 'bg-background text-text  hover:bg-secondary/50 hover:text-primary'}    
                                    `} 
                                    type='button'
                                >
                                    {cat}
                                </button>
                            ))
                        }
                    </div>

                </div>

                {/* tags container */}
                <div
                    className='flex flex-col w-full h-fit gap-1'
                >

                    <h4
                        className='text-text pl-0.5'
                    >
                        Tags
                    </h4>

                    <div
                        className='w-full h-full flex relative '
                    >

                        {/* tags btn */}
                        <button
                            className='w-full h-fit p-2 rounded border-2 border-primary text-text text-start px-3 flex-row flex justify-between items-center font-medium cursor-pointer'
                            type='button'
                            onClick={() => setIsTagsDropdownActive(!isTagsDropdownActive)}
                        >
                            <span
                                className={`text-text/50 ${currentTags.length <= 0 ? 'flex' : 'hidden'}`}
                            >
                                No tags selected
                            </span>
                            <svg className={isTagsDropdownActive ? 'rotate-180 mb-0.5' : 'rotate-0 mb-0.5'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9l6 6l6-6"></path>
                            </svg>
                        </button>

                        <div
                            className={`${isTagsDropdownActive ? 'flex' : 'hidden'} w-1/2 top-13 right-0 h-fit absolute flex-col gap-2 bg-background shadow shadow-text/50 px-3.5 p-3 rounded z-50`}
                        >

                            <TextInput
                                placeholder='Search tags...'
                                name={'Tags'}
                                text={searchInput}
                                handleText={(e) => setSearchInput(e.target.value)}
                            />

                            <div
                                className='flex flex-wrap gap-2 w-full h-full'
                            >
                                {
                                    tags.map((tag) => (
                                        <TagBtn
                                            name={tag}
                                        />
                                    ))
                                }
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </DropDownBox>
    )
}

export default LabelBox