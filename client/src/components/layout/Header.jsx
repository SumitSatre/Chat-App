import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";

import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const SearchDialog = React.lazy(() => import("../specific/SearchDialog"));
const NotificationDialog = React.lazy(() => import("../specific/NotificationDialog"));
const NewGroup = React.lazy(() => import("../specific/NewGroup"));

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {

    console.log("mobile");

    // dispatch(setIsMobile(true));
    setIsMobile((prev) => !prev);
  }

  // const openSearch = () => dispatch(setIsSearch(true));

  const openSearchDialog = () => {
    console.log("openSearchDialog");
    setIsSearch((prev) => !prev);

  }

  const openNewGroup = () => {
    console.log("new group opened");
    setIsNewGroup((prev) => !prev);


    // dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
    // dispatch(setIsNotification(true));
    // dispatch(resetNotificationCount());
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = async () => {
    //  try {
    //    const { data } = await axios.get(`${server}/api/v1/user/logout`, {
    //      withCredentials: true,
    //    });
    //    dispatch(userNotExists());
    //    toast.success(data.message);
    //  } catch (error) {
    //    toast.error(error?.response?.data?.message || "Something went wrong");
    //  }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "orange", // Corrected the color definition
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn onClick={openSearchDialog} title={"Search"} icon={<SearchIcon />} />
              <IconBtn onClick={openNewGroup} title={"New Group"} icon={<AddIcon />} />
              <IconBtn title={"Manage Groups"} icon={<GroupIcon />} />
              <IconBtn onClick={openNotification} title={"Notifications"} icon={<NotificationsIcon />} />
              <IconBtn title={"Logout"} icon={<LogoutIcon />} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {
        isSearch && (
          <Suspense fallback={<Backdrop open />}>
            < SearchDialog />
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open />}>
            < NotificationDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            < NewGroup />
          </Suspense>
        )
      }
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
