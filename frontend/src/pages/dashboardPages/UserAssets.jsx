import React, { useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import AssetsDetails from '../../components/AssetsPage/AssetsDetails'
import FileViewer from '../../components/AssetsPage/FileViewer'

const UserAssets = () => {

    const [files, setFiles] = useState([])

    // allows users to upload files
    const handleFileUpload = (file) => {
            if (file) {
                setFiles([
                    ...files,
                    file
                ])
            }
    }

    return (
        <DashboardLayout>
            
            {/* allows users to view the current storage, recent uploads and upload photos input */}
            <AssetsDetails
                files={files}
                handleFileUpload={handleFileUpload}
            />

            {/* view all the files and filter them */}
            <FileViewer
                
            />


        </DashboardLayout>
    )
}

export default UserAssets