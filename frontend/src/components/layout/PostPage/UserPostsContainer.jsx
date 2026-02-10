import React, { useEffect, useState } from 'react'
import TextInput from '../../inputs/TextInput'
import SearchBarInput from '../../inputs/SearchBarInput'
import { useNavigate, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import PostCard from '../../card/PostCard'

const UserPostsContainer = () => {
    
    // state
    const [selectedView, setSelectedView] = useState('Card')
    const [filter, setFilter] = useState('All')
    // const { isLoading, error, data: posts } = useQuery({
    //     queryKey: ['userPosts'],
    //     queryFn: ''
    // })
    const [posts] = useState([
        {
            id: 0,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            viewCount: 320,
            status: 'Published',
            category: 'Tech',
            tags: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            date: '2025-04-29 12:53:53'
        },
        {
            id: 1,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            viewCount: 900,
            status: 'Draft',
            category: 'Tech',
            tags: ['dolor', 'sit', 'amet'],
            date: '2025-05-28 12:53:53'
        },
        {
            id: 2,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem ipsum dolor sit amet adipisicing elit',
            viewCount: 506,
            status: 'Draft',
            category: 'Lifestyle',
            tags: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            date: '2025-01-7 12:53:53'
        },
        {
            id: 3,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem ipsum dolor sit amet adipisicing elit dolor sit amet',
            viewCount: 1289,
            status: 'Published',
            category: 'Lifestyle',
            tags: ['Lorem', 'amet'],
            date: '2025-01-3 12:53:53'
        },
        { 
            id: 4,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem sit amet adipisicing elit dolor sit amet',
            viewCount: 2000,
            status: 'Published',
            category: 'Politics',
            tags: ['Lorem', 'dolor', 'sit', 'amet'],
            date: '2025-01-3 12:53:53'
        },
        { 
            id: 5,
            image: 'https://picsum.photos/seed/picsum/1920/1080',
            title: 'Lorem sit amet adipisicing',
            viewCount: 1542,
            status: 'Draft',
            category: 'Tech',
            tags: ['Lorem', 'ipsum'],
            date: '2025-01-3 12:53:53'
        },
    ])

    const [searchQuery, setSearchQuery] = useState('')

    const viewBtns = [
        {
            name: 'Card',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5z"></path><path d="M7 15h10v2H7zm0-8h6v6H7z"></path></svg>
        },
        {
            name: 'List',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h14v14z"></path><path d="M7 7h2v2H7zm4 0h6v2h-6zm-4 4h2v2H7zm4 0h6v2h-6zm-4 4h2v2H7zm4 0h6v2h-6z"></path></svg>
        },
    ]

    const filterBtns = [
        {
            name: 'All',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M6.44 16.37 11 13.73V19h2v-5.27l4.56 2.64 1-1.74L14 12l4.56-2.63-1-1.74L13 10.27V5h-2v5.27L6.44 7.63l-1 1.74L10 12l-4.56 2.63z"></path></svg>
        },
        {
            name: 'Published',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="M4 4h16v2H4zm8 4-5 6h4v7h2v-7h4z"></path></svg>
        },
        {
            name: 'Draft',
            icon: <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}><path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path></svg>
        }
    ]

    const navigate = useNavigate()

    return (
        <div
            className='flex flex-col gap-4 w-full h-full col-span-11 row-span-14 row-start-3'
        >
            
            {/* title and buttons and searchbar */}
            <div
                className='flex flex-col gap-2 w-full h-fit'
            >

                {/* title and buttons */}
                <div
                    className='w-full h-fit flex flex-row justify-between items-center'
                >
                    <h2
                        className='text-xl font-medium text-text dark:text-dark-text'
                    >
                        My Posts
                    </h2>

                    {/* view btns */}
                    <div
                        className='flex flex-row items-center gap-2 w-fit h-fit'
                    >   
                        {
                            filterBtns.map((btn) => (
                                <button
                                    key={btn.name}
                                    className={`duration-200 rounded text-sm flex flex-row items-center gap-2 px-3 p-2 w-fit h-fit ${filter === btn.name ? 'bg-primary dark:bg-dark-primary text-dark-text' : 'text-primary dark:text-dark-text hover:bg-primary dark:hover:bg-dark-primary hover:text-dark-text dark:bg-dark-secondary bg-secondary'}`}
                                    onClick={() => setFilter(btn.name)}
                                >
                                    {btn.icon}
                                    {btn.name}
                                </button>
                            ))
                        }
                    </div>

                </div>

                <span className='w-full h-px bg-primary dark:bg-dark-primary'></span>

                <SearchBarInput
                    value={searchQuery}
                    changeQuery={setSearchQuery}
                />
                    

            </div>

            {/* cards */}
            <div
                className='w-full h-full grid grid-cols-3 gap-2 overflow-y-scroll items-start justify-start'
            >
                {
                    posts.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            image={post.image}
                            tags={post.tags}
                            category={post.category}
                            status={post.status}
                            date={post.date}
                            views={post.viewCount}
                        />
                    ))
                }
            </div>

            {/* filter and new post button */}
            <div
                className='w-full flex flex-row items-center justify-between h-fit'
            >
                <div
                    className='flex flex-row items-center gap-2 w-fit h-fit'
                >
                    {
                        viewBtns.map((btn) => (
                            <button
                                key={btn.name}
                                className={`duration-200 text-sm rounded flex flex-row items-center gap-2 px-3 p-2 w-fit h-full ${selectedView === btn.name ? 'bg-primary dark:bg-dark-primary text-dark-text' : 'text-primary dark:text-dark-text hover:bg-primary dark:hover:bg-dark-primary hover:text-dark-text dark:bg-dark-secondary bg-secondary'}`}
                                onClick={() => setSelectedView(btn.name)}
                            >
                                {btn.icon}
                                {btn.name}
                            </button>
                        ))
                    }
                </div>
                <Link
                    className='p-2 px-3 w-fit h-fit rounded-md bg-primary dark:bg-dark-primary hover:bg-accent dark:hover:bg-dark-accent duration-200 text-dark-text text-sm flex flex-row items-center gap-2'
                    to='/Posts/Newpost'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>
                    New post 
                </Link>
            </div>

        </div>
    )
}

export default UserPostsContainer
