/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useLocation } from "react-router";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

// import Tooltip from "@mui/material/Tooltip";

import { BreadCrumbsHome, NotificationBell } from "./SvgIcons.Navbar";

import { Breadcrumbs } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// ========Images Import================
import COA from "src/assets/images/login/coa.svg";

// ============Import Redux Store=================
import container from "./Navbar.Container";

// ==========Import Icon================
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

function Navbar({ currentUser, onLogout }) {
  const navigate = useNavigate();
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const location = useLocation();
  const rawpathname = location.pathname;
  const path = rawpathname.split("/");
  const breadCrumbTitle = capitalizeFirstLetter(rawpathname.split("/")[2]);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    onLogout(() => {
      navigate("/login");
    });
  };

  return (
    <>
      {/* {console.log(path)} */}
      <>
        <AppBar
          position="sticky"
          sx={{
            background: "white",
            color: "black",
            boxShadow: "none",
          }}
        >
          <Box sx={{ display: "flex", paddingX: "20px", height: "96px" }}>
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Nav Left Section */}
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {/* COA Logo */}
                {/* <Box sx={{ height: "3.75rem", width: "4.4744rem" }}>
                  <img
                    src={COA}
                    height="100%"
                    width="100%"
                    alt="coat-of-arms"
                  />
                </Box> */}

                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "700", fontSize: "1.375rem" }}
                  >
                    Seller
                  </Typography>
                  <Typography sx={{}}>Gharpaluwa Pet Solutions</Typography>
                </Box>
              </Box>

              {/* Nav Right Section */}
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100px",
                }}
              >
                <IconButton>
                  <NotificationBell color="#5D6679" />
                </IconButton>
                <Tooltip title="User Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Avatar />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ color: "black", fontSize: "14px" }}>
                          {`${currentUser?.first_name} ${currentUser?.last_name}`}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "rgba(0, 0, 0, 0.60)",
                          }}
                        >
                          {currentUser?.role?.name}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/manage/settings")}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>

        {/* <Box
          sx={{
            background: "white",
            padding: "6px 20px",
            marginX: "31px",
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "500", fontSize: "1.25rem", color: "black" }}
            >
              {breadCrumbTitle}
            </Typography>
          </Box>

          <Box>
            <Breadcrumbs aria-label="navigation-breadcrumbs">
              <Link color="inherit" to="/">
                <IconButton>
                  <BreadCrumbsHome />
                </IconButton>
              </Link>

              {path
                .filter((pathname) => pathname !== "" && pathname !== "manage")
                .map((pathname) => (
                  <Typography color="text.primary" key={pathname}>
                    {pathname}
                  </Typography>
                ))}
            </Breadcrumbs>
          </Box>
        </Box> */}
      </>
    </>
  );
}

export default container(Navbar);
