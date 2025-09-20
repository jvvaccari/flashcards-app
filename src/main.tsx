import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Theme from "./theme/default.tsx";
import { AppRoutes } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <AppRoutes />
    </Theme>
  </StrictMode>
);
