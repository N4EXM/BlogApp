import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/layout/dashboard/DashboardLayout'
import SearchBarInput from '../components/inputs/SearchBarInput'
import AssetListCard from '../components/card/AssetListCard'
import { images } from '../assets'
import GeneralBtn from '../components/buttons/GeneralBtn'

const AssetsPage = () => {

    // state
    const [assets, setAssets] = useState(images)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        console.log(assets)
    }, [])

    return (
        <DashboardLayout>
            
            {/* search bar and asset list */}
            <div
                className='flex flex-col gap-4 w-full h-full col-span-11 row-span-14 row-start-3 '
            >

                {/* assets */}
                <div
                    className='flex flex-col gap-4 w-full h-full'
                >
                    
                    {/* search bar */}
                    <div
                        className='w-full h-fit flex gap-4'
                    >
                        <SearchBarInput
                            value={searchQuery}
                            changeQuery={setSearchQuery}
                            placeholderText='Search an asset...'
                        />
                        <GeneralBtn
                            colour={'primary'}
                            icon={<svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>}
                            name={'Asset'}
                        />
                    </div>

                    <span className='w-full min-h-px bg-accent dark:bg-dark-accent'></span>

                    <div
                        className='flex flex-col w-full h-full overflow-y-scroll'
                    >
                        <h2
                            className='p-2 px-3 bg-secondary rounded-t-md font-semibold text-xl text-text dark:text-dark-text'
                        >
                            Assets
                        </h2>
                        <div
                            className='flex flex-col w-full h-full overflow-y-scroll'
                        >
                            {
                                assets.map((asset, index) => (
                                    <AssetListCard
                                        index={index}
                                        arrayLength={assets.length - 1}
                                        key={asset.id}
                                        name={asset.name}
                                        imagePath={asset.image_path}
                                        date={asset.date}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>

        </DashboardLayout>
    )
}

export default AssetsPage