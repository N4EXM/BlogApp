import React, { useEffect, useState } from 'react'
import DropDownBox from './DropDownBox'
import TitleBox from './TitleBox'
import FeaturedImageBlock from './FeaturedImageBlock'
import RichTextEditor from '../inputs/RichTextEditor'

const PostHandlerContainer = ({ data }) => {

    const tabs = ['Featured', 'Content', 'SEO']
    const [currentTab, setCurrentTab] = useState('Featured')

    const [featuredTab, setFeaturedTab] = useState({
        title: '',
        thumbnail: null,
        excerpt: null        
    })

    // functions

    const handleThumbnail = (image) => {
        if (featuredTab.thumbnail === image) {
            setFeaturedTab({...featuredTab, thumbnail: null})
        }
        else {
            setFeaturedTab({...featuredTab, thumbnail: image})
        }
    }

    const handleExcerpt = (contentJSON) => {
        setFeaturedTab({ ...featuredTab, excerpt: contentJSON })
    }

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

                {/* featured */}
                <div
                    className={`${currentTab === 'Featured' ? 'flex' : 'hidden'} flex-col gap-4 w-full overflow-y-scroll pb-4 scrollbar-hide`}
                >
                    <TitleBox
                        title={featuredTab.title}
                        setTitle={(e) => setFeaturedTab({...featuredTab, title: e.target.value})}
                    />
                    <FeaturedImageBlock
                        handleThumbnail={handleThumbnail}
                        image={featuredTab.thumbnail}
                    />
                    <RichTextEditor
                        initialContent={featuredTab.excerpt}
                        onContentChange={handleExcerpt}
                    />
                </div>
                
            </div>

        </div>
    )
}

export default PostHandlerContainer