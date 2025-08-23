import { MantineProvider } from "@mantine/core";

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        /** Paleta de cores customizadas */
        colors: {
          brand: [
            "#f0faff", // 0
            "#f6eccc", // 1
            "#99caed", // 2
            "#66afe3", // 3
            "#3395da", // 4
            "#007bce", // 5
            "#0061a5", // 6
            "#00487c", // 7
            "#002e53", // 8
            "#000000", // 9
          ],
        },

        /** Define que "brand" será a cor primária */
        primaryShade: 5,
        primaryColor: "brand",

        /** Tipografia global */
        fontFamily: "Inter, sans-serif",
        headings: {
          fontFamily: "Poppins, sans-serif",
          sizes: {
            h1: { fontSize: "2.5rem", fontWeight: "700" },
            h2: { fontSize: "2rem", fontWeight: "600" },
          },
        },

        /** Espaçamento customizado */
        spacing: {
          xs: "0.5rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },

        /** Raio de bordas */
        radius: {
          sm: "4px",
          md: "8px",
          lg: "16px",
        },

        /** Tema dark/light */
        defaultRadius: "md",
      }}
    >
      {children}
    </MantineProvider>
  );
}
