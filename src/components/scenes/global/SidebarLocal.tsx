import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, To } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = (
  title: string,
  to: To,
  icon: ReactElement<any, string | JSXElementConstructor<any>>,
  selected: string,
  setSelected: (arg0: string) => void) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

export const SidebarLocal = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: ` ${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important"
      },
      "& .pro-menu-item.active": {
        color: '#6870fa !important'
      }
    }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square"
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100]
            }}>
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={"15px"}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img alt="profile-user"
                  width={"100px"}
                  height={"100px"}
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }} />
              </Box>
              <Box textAlign={"center"}>
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0 " }}>Masoud Kargar</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>dashboard admin</Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            {Item("Dashboard", "/", <HomeOutlinedIcon />, selected, setSelected)}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> Data</Typography>
            {Item("Manage Team", "/team", <PeopleOutlinedIcon />, selected, setSelected)}
            {Item("Contacts Information", "/contacts", <ContactsOutlinedIcon />, selected, setSelected)}
            {Item("Invoices Balances", "/invoices", <ReceiptOutlinedIcon />, selected, setSelected)}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> pages</Typography>
            {Item("Profile Form", "/form", <PersonOutlinedIcon />, selected, setSelected)}
            {Item("Calender", "/calender", <CalendarTodayOutlinedIcon />, selected, setSelected)}
            {Item("FAQ", "/faq", <HelpOutlinedIcon />, selected, setSelected)}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> Charts</Typography>
            {Item("Bar Chart", "/bar", <BarChartOutlinedIcon />, selected, setSelected)}
            {Item("Pie Chart", "/pie", <PieChartOutlinedIcon />, selected, setSelected)}
            {Item("Line Chart", "/line", <TimelineOutlinedIcon />, selected, setSelected)}
            {Item("Geography", "/geography", <MapOutlinedIcon />, selected, setSelected)}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}
export default SidebarLocal;  
