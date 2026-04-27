import React, { useState } from 'react'
import DropDownBox from './DropDownBox'

const TagsBox = ({ handleAddTags, currentTags }) => {

    const [tags, setTags] = useState()

    return (
        <DropDownBox
            name='Tags'
        >   
            
        </DropDownBox>
    )
}

export default TagsBox