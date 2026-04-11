import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useState, useEffect } from 'react';
import DropDownBox from '../PostsPage/DropDownBox';
import Toolbar from './Toolbar';

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
        editorState: initialContent,
        
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
                    className='flex flex-col gap-1 w-full h-fit bg-background rounded p-4'
                >

                    <h2
                        className='text-text'
                    >
                        Content
                    </h2>

                    <div
                        className='bg-background w-full rounded flex flex-col relative'
                    >
                        <RichTextPlugin
                            contentEditable={
                                <ContentEditable
                                    className=' outline-none p-2 border-2 border-primary border-b-0 rounded-b-none rounded min-h-52 '
                                    aria-placeholder='Enter some text...'
                                    placeholder={<h2 className='top-2 left-2.5 absolute text-text/50'>Enter some content...</h2>}
                                />
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin/>
                        <OnChangePlugin onChange={handleEditorChange}/>

                        <Toolbar/>

                    </div>

                    {/* extra text */}
                    <h3
                        className='text-text/70 text-sm'

                    >
                            The rich text editor allows style and format your writing. 
                    </h3>
                    
                </div>
            </DropDownBox>
                
        </LexicalComposer>
    )
}

export default RichTextEditor