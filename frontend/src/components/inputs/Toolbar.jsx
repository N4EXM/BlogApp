// Toolbar.jsx
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { 
    FORMAT_TEXT_COMMAND, 
    FORMAT_ELEMENT_COMMAND,
    UNDO_COMMAND, 
    REDO_COMMAND,
    SELECT_ALL_COMMAND,
    CLEAR_EDITOR_COMMAND
} from 'lexical';
import { 
    INSERT_ORDERED_LIST_COMMAND, 
    INSERT_UNORDERED_LIST_COMMAND 
} from '@lexical/list';
import { $getSelection, $isRangeSelection } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import ToolbarButton from '../btns/ToolbarBtn'


export default function Toolbar() {

    const [editor] = useLexicalComposerContext();
    const [activeFormats, setActiveFormats] = useState({
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        code: false,
    });

    // Track selection changes to update button states
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
            setActiveFormats({
                bold: selection.hasFormat('bold'),
                italic: selection.hasFormat('italic'),
                underline: selection.hasFormat('underline'),
                strikethrough: selection.hasFormat('strikethrough'),
                code: selection.hasFormat('code'),
            });
            }
        });
        });
    }, [editor]);

    const formatText = (format) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
    };

    const formatElement = (alignment) => {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment);
    };

    const insertList = (listType) => {
        if (listType === 'ul') {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
    };

    return (
        <div className="border-2 border-primary rounded rounded-t-none bg-background flex overflow-x-scroll sticky top-0 z-10 scrollbar-hide">
            {/* Undo/Redo Group */}
            <div className="flex gap-0 border-r border-primary">
                <ToolbarButton
                    onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
                    title="Undo (Ctrl+Z)"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 10h6c2.21 0 4 1.79 4 4s-1.79 4-4 4h-3v2h3c3.31 0 6-2.69 6-6s-2.69-6-6-6H9V4L3 9l6 5z"></path></svg>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
                    title="Redo (Ctrl+Y)"                
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9 20h3v-2H9c-2.21 0-4-1.79-4-4s1.79-4 4-4h6v4l6-5-6-5v4H9c-3.31 0-6 2.69-6 6s2.69 6 6 6"></path></svg>
                </ToolbarButton>
            </div>

            {/* Text Formatting Group */}
            <div className="flex gap-0 border-r border-primary ">
                <ToolbarButton
                    active={activeFormats.bold}
                    onClick={() => formatText('bold')}
                    title="Bold (Ctrl+B)"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M13 4.5H7c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5h6.5c2.48 0 4.5-2.02 4.5-4.5 0-1.3-.56-2.46-1.44-3.28.58-.76.94-1.69.94-2.72 0-2.48-2.02-4.5-4.5-4.5m0 3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H8.5v-3zm.5 9h-5v-3h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></path></svg>
                </ToolbarButton>
                
                <ToolbarButton
                    active={activeFormats.italic}
                    onClick={() => formatText('italic')}
                    title="Italic (Ctrl+I)"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M19 4H9v2h3.67L9.25 18H5v2h10v-2h-3.67l3.42-12H19z"></path></svg>
                </ToolbarButton>
                
                <ToolbarButton
                    active={activeFormats.underline}
                    onClick={() => formatText('underline')}
                    title="Underline (Ctrl+U)"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M5 18h14v2H5zM6 4v6c0 3.31 2.69 6 6 6s6-2.69 6-6V4h-2v6c0 2.21-1.79 4-4 4s-4-1.79-4-4V4z"></path></svg>
                </ToolbarButton>
                
                <ToolbarButton
                    active={activeFormats.strikethrough}
                    onClick={() => formatText('strikethrough')}
                    title="Strikethrough"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M20 13v-2h-9c-2.64 0-3-1.44-3-3 0-.56.72-2 4-2 2.8 0 2.99 1.68 3 2.01h1L17 8c0-1.38-1.04-4-5-4-4.75 0-6 2.62-6 4 0 1.31.29 2.28.73 3H4v2zm-2 2h-2c0 .12-.05 3-4 3s-3.99-1.82-4-2H6s.07 4 6 4c4.75 0 6-3.27 6-5"></path></svg>
                </ToolbarButton>
                
                <ToolbarButton
                    active={activeFormats.code}
                    onClick={() => formatText('code')}
                    title="Inline Code"
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M9.71 16.29 5.41 12l4.3-4.29-1.42-1.42L2.59 12l5.7 5.71zm6 1.42 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path></svg>    
                </ToolbarButton>
            </div>

            {/* Alignment Group */}
            <div className="flex gap-0 border-r border-primary ">
                <ToolbarButton
                    onClick={() => formatElement('left')}
                    title="Align Left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                    </svg>
                </ToolbarButton>
                
                <ToolbarButton
                    onClick={() => formatElement('center')}
                    title="Align Center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M8 12h8M4 18h16" />
                    </svg>
                </ToolbarButton>
                
                <ToolbarButton
                    onClick={() => formatElement('right')}
                    title="Align Right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M14 12h6M4 18h16" />
                    </svg>
                </ToolbarButton>
                
                <ToolbarButton
                    onClick={() => formatElement('justify')}
                    title="Justify"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </ToolbarButton>
            </div>

            {/* Lists Group */}
            <div className="flex gap-0 border-r border-primary ">
                <ToolbarButton
                    onClick={() => insertList('ul')}
                    title="Bullet List"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </ToolbarButton>
                
                <ToolbarButton
                    onClick={() => insertList('ol')}
                    title="Numbered List"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </ToolbarButton>
            </div>

            {/* Additional Actions */}
            <div className="flex gap-0">
                <ToolbarButton
                    onClick={() => editor.dispatchCommand(SELECT_ALL_COMMAND, undefined)}
                    title="Select All (Ctrl+A)"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z M8 8h8v8H8z" />
                    </svg>
                </ToolbarButton>
                
                <ToolbarButton
                    onClick={() => editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined)}
                    title="Clear Formatting"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </ToolbarButton>
            </div>
        </div>
    );
}
