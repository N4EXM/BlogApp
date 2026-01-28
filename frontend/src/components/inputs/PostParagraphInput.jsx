import React, { useState } from 'react'
import TextareaInput from './TextareaInput'

const PostParagraphInput = ({ onChange, value, id }) => {
    
    const [paragraph, setParagraph] = useState(value)

    const handleChangeContent = (e) => {
        setParagraph(e.target.value) 
        onChange(id, e.target.value, 'Paragraph')
    }

    return (
        <TextareaInput
            name={'Paragraph'}
            value={paragraph}
            onChange={handleChangeContent}
            type={'text'}
            isRequired={false}
            placeholderText={'Enter some content...'}
            showName={true}
            secondaryText={'What is the paragraph talking about'}
            secondaryTextShow={true}
        />
    )
}

export default PostParagraphInput