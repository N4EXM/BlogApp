import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useState, useEffect } from 'react';
import DropDownBox from '../PostsPage/DropDownBox';

const theme = {}

function onError(error) {
    console.error(error)
}

const RichTextEditor = ({ initialContent, onContentChange }) => {

    const [editorStateString, setEditorStateString] = useState(null) // the actual content

    const config = { // config for the editor 
        namespace: 'editorInput',
        theme,
        onError,
        editorState: initialContent
    }

    const handleEditorChange = (editorState) => {

        const stateJSON = JSON.stringify(editorState.toJSON())
        setEditorStateString(stateJSON)

        // Pass the data up to the parent component
        if (onContentChange) {
            onContentChange(stateJSON);
        }

    }

    

    return (
        <LexicalComposer
            initialConfig={config}
        >
            
            <DropDownBox
                isRequired={false}
                name={'Excerpt'}
            >
                
                <div
                    className='bg-background border-2 border-primary w-full rounded p-4'
                >
                    {/* toolbar */}

                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className='outline-none p-2'
                                aria-placeholder='Enter some text...'
                            />
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin/>
                    <OnChangePlugin onChange={handleEditorChange}/>

                </div>
                
            </DropDownBox>
                
        </LexicalComposer>
    )
}

export default RichTextEditor