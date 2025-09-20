import Box from "@mui/material/Box";
import StarterKit from "@tiptap/starter-kit";
import { FontSize, TextStyle } from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";

import { useEditor } from "@tiptap/react";
import { useRef } from "react";
import TextEditor from "../../components/TextEditor";

const CreateCardPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph", "image"] }),
      Image,
    ],
    content: "",
  });

  const handleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };
  const handleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };
  const handleClear = () => {
    editor?.chain().focus().setContent("").run();
  };
  const handleAlignLeft = () => {
    editor?.chain().focus().setTextAlign("left").run();
  };
  const handleAlignCenter = () => {
    editor?.chain().focus().setTextAlign("center").run();
  };
  const handleAlignRight = () => {
    editor?.chain().focus().setTextAlign("right").run();
  };

  const handleSaveContent = () => {
    const content = editor?.getJSON();
    console.log("Saving content:", content);
  };

  const handleTextIncrease = () => {
    const currentSizeRaw = editor?.getAttributes("textStyle").fontSize || 16;
    const currentSize =
      typeof currentSizeRaw === "string"
        ? parseInt(currentSizeRaw)
        : currentSizeRaw;
    const newSize = Math.min(currentSize + 2, 48);
    editor?.chain().focus().setFontSize(`${newSize}px`).run();
  };

  const handleTextDecrease = () => {
    const currentSizeRaw = editor?.getAttributes("textStyle").fontSize || 16;
    const currentSize =
      typeof currentSizeRaw === "string"
        ? parseInt(currentSizeRaw)
        : currentSizeRaw;
    const newSize = Math.max(currentSize - 2, 10);
    editor?.chain().focus().setFontSize(`${newSize}px`).run();
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (!editor) return;
        const { state } = editor;
        const selectionEmpty = state.selection.empty;
        const imageAttrs = {
          src: "https://m.media-amazon.com/images/I/71e42Lw4QJL._AC_SX522_.jpg",
          width: 300,
        };
        if (selectionEmpty) {
          editor
            .chain()
            .focus()
            .insertContent({ type: "image", attrs: imageAttrs })
            .run();
        } else {
          editor.chain().focus().setImage(imageAttrs).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212529",
        margin: 0,
        padding: 0,
      }}
    >
      <TextEditor
        editor={editor}
        inputRef={inputRef}
        handleBold={handleBold}
        handleItalic={handleItalic}
        handleClear={handleClear}
        handleAlignLeft={handleAlignLeft}
        handleAlignCenter={handleAlignCenter}
        handleAlignRight={handleAlignRight}
        handleTextIncrease={handleTextIncrease}
        handleTextDecrease={handleTextDecrease}
        handleUploadClick={handleUploadClick}
        handleSaveContent={handleSaveContent}
        handleFileChange={handleFileChange}
      />
    </Box>
  );
};

export default CreateCardPage;
