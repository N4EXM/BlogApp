import React, { useMemo } from "react";
import { useEditor, Tiptap, EditorContext } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from '@tiptap/extension-placeholder'

const RichTextInput = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Enter some content'
      })
    ],
    content: `<p></p>`,
    editorProps: {
      attributes: {
        // Add your Tailwind classes here
        class:
          "prose prose-lg max-w-none focus:outline-none min-h-[200px] p-2 bg-background border-2 rounded border-primary text-text placeholder:text-text/50",
      },
    },
  });

  const providerValue = useMemo(() => ({ editor }, [editor]))

  return (
    <EditorContext.Provider value={providerValue}>
      <div className="flex flex-col gap-2 w-full h-full">
        <Tiptap editor={editor}>
          <Tiptap.Content />
        </Tiptap>
      </div>
    </EditorContext.Provider>
  );
};

export default RichTextInput;
