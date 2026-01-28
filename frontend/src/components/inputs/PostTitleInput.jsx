import React, { useState } from 'react'
import TextInput from './TextInput'

const PostTitleInput = ({ onChange, value, id }) => {
    
    const [title, setTitle] = useState(value)
    
    const handleChangeContent = (e) => {
        setTitle(e.target.value) 
        onChange(id, e.target.value, 'Title')
    }

    return (
        <TextInput
            name={'Title'}
            value={title}
            onChange={handleChangeContent}
            type={'text'}
            isRequired={false}
            placeholderText={'Enter a title...'}
            showName={true}
            secondaryText={'The title will show the user what your post is about'}
            secondaryTextShow={true}
        />
    )
}

export default PostTitleInput