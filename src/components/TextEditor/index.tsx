import Stack from "@mui/material/Stack";
import ControlBar from "./ControlBar";
import { EditorContent, useEditor } from "@tiptap/react";
import { Box, useTheme } from "@mui/material";
import "../../App.css";

const TextEditor = ({
  editor,
  inputRef,
  handleBold,
  handleItalic,
  handleClear,
  handleAlignLeft,
  handleAlignCenter,
  handleAlignRight,
  handleTextIncrease,
  handleTextDecrease,
  handleUploadClick,
  handleSaveContent,
  handleFileChange,
}: {
  editor: ReturnType<typeof useEditor>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleBold: () => void;
  handleItalic: () => void;
  handleClear: () => void;
  handleAlignLeft: () => void;
  handleAlignCenter: () => void;
  handleAlignRight: () => void;
  handleTextIncrease: () => void;
  handleTextDecrease: () => void;
  handleUploadClick: () => void;
  handleSaveContent: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const theme = useTheme();

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
        handleSaveContent={handleSaveContent}
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
            }}
            className="editor"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default TextEditor;
