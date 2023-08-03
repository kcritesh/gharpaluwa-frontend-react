"use client ";

import * as React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { usePathname } from "next/navigation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";

// import Typography from "@mui/material/Typography";

import MuiListItem from "@mui/material/ListItem";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// ========Images Import
import GharpaluwaLogo from "src/assets/images/gharpaluwa.com.svg";

import {
  SidebarMenuListTop,
  SidebarMenuListBottom,
  SidebarMenuListType,
} from "./Sidebar.MenuList";

import { Divider } from "@mui/material";
import { signoutStart } from "src/store/auth/auth.actions";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  position: "relative",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: "none",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.disabled,
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  borderRadius: "8px",
  ":hover": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
}));

interface SidebarProps {
  showSidebar: boolean;
}

export default function Sidebar({ showSidebar }: SidebarProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState("");
  const handleListItemHover = (path: string) => {
    setHoveredItem(path);
  };

  const location = useLocation();
  const pathname = location.pathname.split("/").slice(0, 3).join("/");
  const handleLogout = () => {
    dispatch(
      signoutStart(() => {
        navigate("/login");
      })
    );
  };

  const handleSetting = () => {
    navigate("/manage/setting");
  };

  return (
    <Box
      sx={{
        padding: showSidebar ? "24px" : "0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        width: showSidebar ? "280px" : "80px",
        background: "white",
      }}
    >
      <Drawer variant="permanent" open={showSidebar}>
        <Box>
          <Box sx={{ height: "80px" }} about="sidebar-header">
            <Box sx={{ height: "80px", position: "relative" }}>
              <img
                src={GharpaluwaLogo}
                alt="logo-gharpaluwa"
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Divider />

          <Box
            about="sidebar-menu"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "85vh",
            }}
          >
            {/* List Top */}
            <List>
              {SidebarMenuListTop.map(
                (
                  { title, icon: Icon, path }: SidebarMenuListType,
                  index: number
                ) => {
                  const listItemHovered = hoveredItem === path;
                  return (
                    <React.Fragment key={index}>
                      <Link
                        to={path}
                        style={{ textDecoration: "none", color: "#25628F" }}
                      >
                        <ListItem disablePadding sx={{ display: "block" }}>
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: showSidebar
                                ? "initial"
                                : "center",
                              px: 2.5,
                            }}
                            selected={pathname === path}
                            onMouseEnter={() => handleListItemHover(path)}
                            onMouseLeave={() => handleListItemHover("")}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: showSidebar ? 3 : "auto",
                                justifyContent: "center",
                              }}
                            >
                              <Icon
                                color={
                                  listItemHovered || pathname === path
                                    ? "white"
                                    : "#5D6679"
                                }
                              />
                            </ListItemIcon>
                            <ListItemText
                              disableTypography
                              primary={title}
                              sx={{
                                opacity: showSidebar ? 1 : 0,
                                fontFamily: "inherit",
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    </React.Fragment>
                  );
                }
              )}
            </List>

            {/* List Bottom */}
            <List>
              {SidebarMenuListBottom.map(
                (
                  { title, icon: Icon, path, onClick }: SidebarMenuListType,
                  index: number
                ) => {
                  const listItemHovered = hoveredItem === path;
                  return (
                    <React.Fragment key={index}>
                      <Link
                        to={path}
                        style={{ textDecoration: "none", color: "#25628F" }}
                      >
                        <ListItem
                          disablePadding
                          sx={{ display: "block" }}
                          onClick={
                            title === "Logout" ? handleLogout : handleSetting
                          }
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: showSidebar
                                ? "initial"
                                : "center",
                              px: 2.5,
                            }}
                            selected={pathname === path}
                            onMouseEnter={() => handleListItemHover(path)}
                            onMouseLeave={() => handleListItemHover("")}
                            onClick={onClick ? onClick : () => null}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: showSidebar ? 3 : "auto",
                                justifyContent: "center",
                              }}
                            >
                              <Icon
                                color={
                                  listItemHovered || pathname === path
                                    ? "white"
                                    : "#5D6679"
                                }
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={title}
                              disableTypography
                              sx={{
                                opacity: showSidebar ? 1 : 0,
                                fontFamily: "inherit",
                                fontWeight: 500,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    </React.Fragment>
                  );
                }
              )}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
