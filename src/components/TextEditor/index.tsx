import Stack from "@mui/material/Stack";
import ControlBar from "./ControlBar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "@tiptap/extension-font-size";
import { TextStyle } from "@tiptap/extension-text-style";
import { Box, useTheme } from "@mui/material";
import Image from "@tiptap/extension-image";
import { useRef } from "react";

const TextEditor = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
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
        const base64 = reader.result as string;
        editor
          .chain()
          .focus()
          .setImage({
            src: base64,
            width: 300,
          })
          .run();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Stack sx={{ height: "100vh", width: "100vw" }}>
      <ControlBar
        handleBold={handleBold}
        handleItalic={handleItalic}
        handleClear={handleClear}
        handleAlignLeft={handleAlignLeft}
        handleAlignCenter={handleAlignCenter}
        handleAlignRight={handleAlignRight}
        handleTextIncrease={handleTextIncrease}
        handleTextDecrease={handleTextDecrease}
        handleUploadClick={handleUploadClick}
      />

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <Stack
        sx={{
          height: "calc(100vh - 64px)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 465,
            aspectRatio: "2/3",
            backgroundColor: theme.palette.background.default,
            backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
            backgroundSize: "20px 20px",
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${
              theme.brand ? theme.brand[5] : theme.palette.primary.dark
            }`,
            boxSizing: "border-box",
            padding: theme.spacing(2),
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflow: "auto",
            position: "relative",
          }}
          onClick={() => editor?.chain().focus().run()}
        >
          <EditorContent
            editor={editor}
            style={{
              width: "100%",
              minHeight: "100%",
              fontSize: "16px",
              background: "none",
              border: "none",
              outline: "none",
            }}
            className="tiptap-editor"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default TextEditor;
