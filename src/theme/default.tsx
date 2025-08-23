import { MantineProvider } from "@mantine/core";

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: [
            "#f0faff", // 0 - mais claro
            "#f6eccc", // 1
            "#dfe3bf", // 2
            "#b0c09f", // 3
            "#5b8266", // 4
            "#3b4853", // 5
            "#2b3238", // 6
            "#212922", // 7
            "#212529", // 8
            "#000000", // 9 - mais escuro
          ],
        },
        primaryShade: 5,
        primaryColor: "brand",
        fontFamily: "Inter, sans-serif",
        headings: {
          fontFamily: "Poppins, sans-serif",
          sizes: {
            h1: { fontSize: "2.5rem", fontWeight: "700" },
            h2: { fontSize: "2rem", fontWeight: "600" },
          },
        },
        spacing: {
          xs: "0.5rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
        radius: {
          sm: "2px",
          md: "4px",
          lg: "8px",
        },
        defaultRadius: "md",
        other: {
          iconSize: {
            sm: 8,
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}
