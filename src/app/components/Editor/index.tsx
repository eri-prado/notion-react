/* eslint-disable @next/next/no-img-element */
'use client';
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { initialContent } from './initialContent';
import { lowlight } from 'lowlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/tokyo-night-dark.css';
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx';
import BubbleButton from '../BubleButton.tsx';
import ButtonMenu from '../ButtonMenu';

lowlight.registerLanguage('js', js);

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  });
  return (
    <>
      <EditorContent
        className="max-w-[700] mx-auto pt-16 prose prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-white py-2 px-1 shadow-xl gap-1 border border-white-600 shadow-black/20 rounded-lg overflow-hidden flex-col"
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === '/';
          }}
        >
          <ButtonMenu>
            <img
              src="https://www.notion.so/images/blocks/text/en-US.png"
              alt="Image"
              className="w-12 border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </ButtonMenu>
          <ButtonMenu
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-12 border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </ButtonMenu>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-white shadow-xl border border-white-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-x-zinc-600"
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
