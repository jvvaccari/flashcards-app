import Stack from "@mui/material/Stack";
import ControlBar from "./ControlBar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "@tiptap/extension-font-size";
import { TextStyle } from "@tiptap/extension-text-style";
import { Box } from "@mui/material";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
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
  const handleAlignJustify = () => {
    editor?.chain().focus().setTextAlign("justify").run();
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

  return (
    <Stack sx={{ height: "100vh", width: "100vw" }}>
      <ControlBar
        handleBold={handleBold}
        handleItalic={handleItalic}
        handleClear={handleClear}
        handleAlignLeft={handleAlignLeft}
        handleAlignJustify={handleAlignJustify}
        handleAlignRight={handleAlignRight}
        handleTextIncrease={handleTextIncrease}
        handleTextDecrease={handleTextDecrease}
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
            width: "465px",
            aspectRatio: "2/3",
            backgroundColor: "#f6eccc",
            backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
            backgroundSize: "20px 20px",
            borderRadius: "16px",
            border: "1px solid #888",
            boxSizing: "border-box",
            padding: "16px",
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
