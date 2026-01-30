import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'


const PostHeadingInput = ({ changeValue, id, content = '', headingType = null }) => {

    // toggles
    const [toggleHeadings, setToggleHeadings] = useState(false)

    const [currentHeadingContent, setCurrentHeadingContent] = useState(content)
    const [currentHeadingType, setCurrentHeadingType] = useState(headingType)

    const handleChangeContent = (e) => { 

        const newHeading = {
            content: e.target.value,
            headingType: currentHeadingType
        }

        setCurrentHeadingContent(e.target.value)
        changeValue(id, newHeading, 'Heading')
    }

    const handleChangeHeadingType = (type) => {
        
        const newHeading = {
            content: currentHeadingContent,
            headingType: type
        }

        setCurrentHeadingType(type)
        // console.log(newHeading)
        changeValue(id, newHeading, 'Heading')
    }

    const headingTypes = ['H1', 'H2', 'H3']

    useEffect(() => {
        if (content === null || headingType === null) {
            setCurrentHeadingContent('')
            setCurrentHeadingType('H1')
        } 
        console.log(content, headingType)
    }, [])

    return (
        <div
            className='flex flex-row items-center gap-2 w-full h-fit'
        >
            <TextInput
                name={'Heading'}
                value={currentHeadingContent}
                onChange={handleChangeContent}
                type={'text'}
                isRequired={false}
                placeholderText={'Enter a heading...'}
                showName={true}
                secondaryText={'The title of another part of your post'}
                secondaryTextShow={true}
            />
            <div
                className='w-1/4 h-full p-2 relative bg-background dark:bg-background/5 dark:text-dark-text rounded border-2 border-primary dark:border-dark-primary pl-3'
                onClick={() => setToggleHeadings(!toggleHeadings)}
            >
                <div
                    className='flex flex-row items-center w-full justify-between'
                >
                    <h2
                        className='text-text dark:text-dark-text font-medium'
                    >
                        {
                            currentHeadingType === null
                            ? 'None'
                            : currentHeadingType
                        }
                    </h2>
                    <i
                        className={`${toggleHeadings ? 'rotate-180' : 'rotate-0'} text-primary dark:text-accent`}
                    >
                        <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path></svg>
                    </i>
                </div>
                
                <div
                    className={`${toggleHeadings ? 'flex' : 'hidden'} w-full h-max absolute top-12.5 left-0 bg-background shadow shadow-dark-background/50 dark:shadow-dark-background rounded`}
                >
                    <div
                        className='w-full h-full dark:bg-dark-background/90 flex flex-col'
                    >
                        {
                            headingTypes.map((type) => (
                                <button
                                    onClick={() => handleChangeHeadingType(type)}
                                    className={`p-2 pl-4 font-medium text-sm text-start hover:bg-dark-background/10 dark:bg-background/10 duration-200`}
                                >
                                    {type}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostHeadingInput