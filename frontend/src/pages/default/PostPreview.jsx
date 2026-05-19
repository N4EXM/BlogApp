import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import ArticleContainer from '../../components/PreviewPage/ArticleContainer'

const PostPreview = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const post = location.state?.post

    useEffect(() => {
        console.log(post)
    }, [])

    return (
        <Layout>
                {/* back button */}
                <div
                    className='col-span-full w-full h-fit'
                >
                    <button
                        className='bg-background rounded shadow shadow-text/50 hover:bg-text/10 text-primary row-start-2 col-start-1 w-fit h-fit p-1 duration-200 active:bg-text/20'
                        onClick={() => navigate(-1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m6.921 12.5l5.439 5.439q.146.146.153.344q.006.198-.16.363q-.164.16-.353.163q-.188.002-.354-.163l-6.08-6.08q-.131-.132-.184-.268T5.329 12t.053-.298t.184-.267l6.08-6.081q.14-.14.341-.15q.202-.01.367.15q.165.165.165.356q0 .192-.165.357L6.92 11.5H18.5q.214 0 .357.143T19 12t-.143.357t-.357.143z"></path>
                        </svg>
                    </button>
                </div>

                <ArticleContainer
                    post={post}
                />

        </Layout>
        
    )
}

export default PostPreview