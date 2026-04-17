import React from 'react'
import DropDownBox from './DropDownBox'
import RichTextInput from '../inputs/RichTextInput'

const RichTextEditorBlock = ({ content, handleChangeContent }) => {
    return (
        <DropDownBox
            name={'Excerpt'}
            isRequired={true}
        >            
            <div
                className='flex flex-col gap-1 w-full h-full bg-background rounded p-4'
            >
                <h2
                    className='text-text'
                >
                    Content
                </h2>
                <RichTextInput
                    content={content}
                    handleChangeContent={handleChangeContent}
                />
                <h3
                    className='text-sm text-text/50'
                >
                    Use the rich text editor to format and style your content
                </h3>
            </div>
        </DropDownBox>
    )
}

export default RichTextEditorBlock