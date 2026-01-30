import React, { useState } from 'react'
import TextInput from './TextInput'


const PostLinkInput = ({ id, text, link, onChange }) => {

    const [newText, setNewText] = useState(text)
    const [newLink, setNewLink] = useState(link)

    const handleChangeText = (e) => {
        setNewText(e.target.value) 
        onChange(id, { text: e.target.value, link: newLink }, 'Hyperlink')
    }

    const handleChangeLink = (e) => {
        setNewLink(e.target.value) 
        onChange(id, { text: newText, link: e.target.value }, 'Hyperlink')
    }

    return (
        <div
            className='flex flex-col gap-5 w-full h-fit'
        >   
            <TextInput
                name={'Text'}
                value={newText}
                onChange={handleChangeText}
                type={'text'}
                isRequired={false}
                placeholderText={'Enter the text for the link...'}
                showName={true}
                secondaryText={'This text will be shown instead of the actual link'}
                secondaryTextShow={true}
            />
            <TextInput
                name={'Hyperlink'}
                value={newLink}
                onChange={handleChangeLink}
                type={'text'}
                isRequired={false}
                placeholderText={'Enter the hyperlink...'}
                showName={true}
                secondaryText={'This is actual link where the hyperlink takes the user to'}
                secondaryTextShow={true}
            />
        </div>
    )
}

export default PostLinkInput