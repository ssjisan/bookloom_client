import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Box,Button} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import navConfig from "./Common/NavConfig";
import {
  ListItem,
  ListItemButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Logo from "/logo2.svg";
import Navbar from "./Navbar";
import "./Scrollbar.css";
import { ArrowDown, Bullet, Sale } from "../assets/IconSet";

const drawerWidth = 280;

function Sidebar(props) {
  //eslint-disable-next-line
  const { window } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAccordionChange = (section) => (event, isExpanded) => {
    setExpanded(isExpanded ? section.title : false);
  };

  const handleItemClick = (link) => {
    navigate(link);
    setMobileOpen(false);
  };

  const ListItemSx = {
    borderRadius: "8px",
    width: "100%",
    height: "36px",
    mb: "4px",
    display: "flex",
  };

  const ListItemButtonSx = {
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "8px",
    width: "100%",
    padding: "8px 16px",
    height: "36px",
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          p: "16px",
        }}
      >
        <Box sx={{ ml: "32px", display: "flex" }}>
          <img src={Logo} alt="logo" width="64px" height="64px" />
        </Box>
          <Button variant="contained" endIcon={<Sale size={20} color="#fff"/>} href="/sale_book">
            Sell Book
          </Button>
        <List>
          {navConfig({ pathname }).map((section) =>
            section.items.length === 1 ? (
              // Render ListItemButton directly if only one item
              <ListItemButton
                key={section.items[0].title}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  borderRadius: "8px",
                  width: "100%",
                  padding: "8px 16px",
                  height: "44px",
                  mb: "8px",
                  background:
                    pathname === section.items[0].link &&
                    "rgba(118, 53, 220, 0.04)",
                  color:
                    pathname === section.items[0].link ? "#7635DC" : "#637381",
                }}
                onClick={() => handleItemClick(section.items[0].link)}
              >
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  {section.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontWeight: pathname === section.items[0].link ? 600 : 500,
                    fontSize: "14px",
                  }}
                >
                  {section.items[0].title}
                </Typography>
              </ListItemButton>
            ) : (
              // Render Accordion if more than one item
              <Accordion
                square={false}
                key={section.title}
                expanded={
                  expanded === section.title ||
                  section.items.some((item) => pathname === item.link)
                }
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "none",
                  "&::before": {
                    content: "none",
                  },
                  boxShadow: "none",
                  margin: "8px 0px",
                  "&.Mui-expanded": {
                    margin: "8px 0px",
                  },
                }}
                onChange={handleAccordionChange(section)}
              >
                <AccordionSummary
                  expandIcon={<ArrowDown color={"#637381"} size={"16px"} />}
                  aria-controls={`${section.title}-content`}
                  id={`${section.title}-header`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    margin: "0px",
                    backgroundColor: section.items.some(
                      (item) => pathname === item.link
                    )
                      ? "rgba(118, 53, 220, 0.04)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "#EFF0F1", // Background color on hover
                    },
                    "&.Mui-expanded": {
                      minHeight: "44px",
                      height: "44px",
                      borderRadius: "8px",
                    },
                    "& .MuiAccordionSummary-content": {
                      alignItems: "center",
                      display: "flex",
                      width: "100%",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "36px" }}>
                    {section.icon}
                  </ListItemIcon>
                  <Typography
                    variant="overline"
                    color={
                      section.items.some((item) => pathname === item.link)
                        ? "#7635DC"
                        : "#637381"
                    }
                  >
                    {section.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ p: "8px 0px 0px 16px" }}>
                  {section.items.map((item) => (
                    <ListItem
                      disablePadding
                      sx={{
                        ...ListItemSx,
                        background:
                          pathname === item.link && "rgba(6, 4, 21, 0.04)",
                      }}
                      key={item.title}
                      onClick={() => handleItemClick(item.link)}
                    >
                      <ListItemButton
                        sx={{
                          ...ListItemButtonSx,
                          color: pathname === item.link ? "#060415" : "#637381",
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "24px" }}>
                          <Bullet
                            color={
                              pathname === item.link ? "#060415" : "#637381"
                            }
                            size={pathname === item.link ? 12 : 10}
                          />
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontWeight: pathname === item.link ? 600 : 500,
                            fontSize: "14px",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </AccordionDetails>
              </Accordion>
            )
          )}
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="sidebar"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#F9FAFB",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#F9FAFB",
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
