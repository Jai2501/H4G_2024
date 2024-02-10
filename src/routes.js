// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Brands from "layouts/challenges";
import Notifications from "layouts/notifications/Notifications";
import SendNotifications from "layouts/notifications/SendNotifications";
import Login from "layouts/authentication/users/Login"

//auth routes
import BrandsDetail from "layouts/challenges/components/Detail"


// @mui icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CategoryIcon from '@mui/icons-material/Category';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import LoginIcon from '@mui/icons-material/Login';
import Icon from "@mui/material/Icon";
import * as React from 'react'
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

const AdminAuthRoutes = ({ children }) => {
  const { role } = useContext(AuthContext)
  return role === "admin" ? children : <Navigate to="/login" />
}
const BrandAuthRoutes = ({ children }) => {
  const { role } = useContext(AuthContext)
  return role === "brand" ? children : <Navigate to="/login" />
}
const BankAuthRoutes = ({ children }) => {
  const { role } = useContext(AuthContext)
  return role === "bank" ? children : <Navigate to="/login" />
}

const routes = [
  {
    routeRole: "admin",
    type: "collapse",
    name: "Dashboard",
    key: "admin/dashboard",
    icon: <DashboardIcon />,
    route: "/admin/dashboard",
    component: <AdminAuthRoutes><Dashboard /></AdminAuthRoutes>,
  },
  {
    routeRole: "admin",
    type: "collapse",
    name: "Challenges",
    key: "admin/brands",
    icon: <StoreIcon />,
    route: "/admin/brands",
    component: <AdminAuthRoutes><Brands /></AdminAuthRoutes>,
  },
  {
    routeRole: "admin",
    type: "collapse",
    name: "Inbox",
    key: "admin/notifications",
    icon: <NotificationsActiveIcon />,
    route: "/admin/notifications",
    component: <AdminAuthRoutes><Notifications /></AdminAuthRoutes>,
  },
]

const authRoutes = [
  {
    routeRole: "admin",
    type: "authRoutes",
    route: "/admin/brands/detail/:id",
    component: <AdminAuthRoutes><BrandsDetail /></AdminAuthRoutes>,
  }
]
export default routes;
export { authRoutes }
