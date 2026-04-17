import React, { useEffect, useState } from 'react'
import DropDownBox from './DropDownBox'
import TitleBlock from './TitleBlock'
import FeaturedImageBlock from './FeaturedImageBlock'
import RichTextEditorBlock from './RichTextEditorBlock'
import RichTextInput from '../inputs/RichTextInput'

const PostHandlerContainer = ({ data }) => {

    const tabs = ['Featured', 'Content', 'SEO']
    const [currentTab, setCurrentTab] = useState('Content')

    const [featuredTab, setFeaturedTab] = useState({
        title: '',
        thumbnail: null,
        excerpt: ''        
    })

    const [articleTab, setArticleTab] = useState('')
    
    // featured tab

    const handleThumbnail = (image) => {
        if (featuredTab.thumbnail === image) {
            setFeaturedTab({...featuredTab, thumbnail: null})
        }
        else {
            setFeaturedTab({...featuredTab, thumbnail: image})
        }
    }

    const handleExcerpt = (contentHTML) => {
        setFeaturedTab({ ...featuredTab, excerpt: contentHTML })
    }

    // content tab



    useEffect(() => {
        console.log(featuredTab)
    }, [featuredTab])


    return (
        <div
            className='col-span-11 w-full row-span-16 rounded border-2 border-primary flex flex-col h-full '
        >

            {/* tabs */}
            <div
                className='bg-secondary w-full rounded-t h-fit flex flex-row'
            >
                {
                    tabs.map((tab, index) => (
                        <button 
                            key={tab}
                            className={` ${index === 0 && 'rounded-tl'} ${currentTab === tab ? 'bg-background text-primary' : 'bg-secondary text-text'} cursor-pointer p-2 px-3 text-sm font-medium`}
                            onClick={() => setCurrentTab(tab)}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* normal wrapper */}
            <div
                className='p-5 w-full h-full flex flex-col overflow-hidden'
            >

                {/* featured tab */}
                <div
                    className={`${currentTab === 'Featured' ? 'flex' : 'hidden'} flex-col gap-4 w-full overflow-y-scroll scrollbar-hide h-full`}
                >
                    <TitleBlock
                        title={featuredTab.title}
                        setTitle={(e) => setFeaturedTab({...featuredTab, title: e.target.value})}
                    />
                    <FeaturedImageBlock
                        handleThumbnail={handleThumbnail}
                        image={featuredTab.thumbnail}
                    />
                    <RichTextEditorBlock
                        content={featuredTab.excerpt}
                        handleChangeContent={handleExcerpt}
                    />
                </div>

                {/* content tab */}
                <div
                    className={`${currentTab === 'Content' ? 'flex' : 'hidden'} flex-col gap-4 w-full h-full overflow-hidden`}
                >

                    {/* image and new editor btns*/}
                    {/* <div
                        className='p-2 rounded border-2 border-primary flex flex-row items-center gap-2 justify-end'
                    >

                        <button
                            className='p-1 rounded bg-accent/80 text-primary hover:bg-primary hover:text-background duration-200'
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
                        </button>
                        <button
                            className='p-1 rounded bg-accent/80 text-primary hover:bg-primary hover:text-background duration-200'
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M4 10c0 3.31 2.69 6 6 6h2v4h2V6h2v14h2V6h3V4H10c-3.31 0-6 2.69-6 6m8 4h-2c-2.21 0-4-1.79-4-4s1.79-4 4-4h2z"></path></svg>
                        </button>

                    </div> */}

                    <div
                        className='w-full flex h-full overflow-hidden'
                    >
                        <RichTextInput/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PostHandlerContainer