import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Header/";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(true);

  return (
    <Box sx={{ display: "flex", background: "#F0F1F3", minHeight: "100vh" }}>
      <Sidebar showSidebar={showSidebar} />

      <Box
        sx={{
          flex: "1 1 0",
          paddingLeft: showSidebar ? "282px" : "60px",
          overflow: "auto",
        }}
      >
        <Navbar />
        {children}
      </Box>
    </Box>
  );
}
