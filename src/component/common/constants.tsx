import { BiHomeAlt } from "react-icons/bi";
import { GiExpense } from "react-icons/gi";
import { GoPackage } from "react-icons/go";
import {
  MdOutlineAddLocationAlt,
  MdOutlineCancelPresentation,
} from "react-icons/md";
import { BsBarChartLine, BsCart3 } from "react-icons/bs";
import { VscGraphLine, VscPackage } from "react-icons/vsc";
import { FaCoins, FaRegUserCircle, FaStoreAlt } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentReport, HiOutlineUserCircle } from "react-icons/hi";
import { snack1, snack2 } from "@/assets/exports";

export const data = [
  {
    id: 1,
    icon: BiHomeAlt,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    icon: BsCart3,
    name: "Inventory",
    path: "/inventory",
  },
  {
    id: 3,
    icon: HiOutlineDocumentReport,
    name: "Reports",
    path: "/reports",
  },
  {
    id: 4,
    icon: HiOutlineUserCircle,
    name: "Suppliers",
    path: "/suppliers",
  },
  {
    id: 5,
    icon: VscPackage,
    name: "Orders",
    path: "/orders",
  },
  {
    id: 6,
    icon: FaStoreAlt,
    name: "Manage Store",
    path: "/store-mgt",
  },
];

export const bottom = [
  {
    id: 1,
    icon: FiSettings,
    name: "Settings",
    path: "/settings",
  },
  {
    id: 2,
    icon: FiLogOut,
    name: "Logout",
  },
];

export const sales = [
  {
    id: 1,
    fig: "₦ 832",
    color: "#629FF4",
    bg: "#E8F1FD",
    img: FaCoins,
    label: "Sales",
  },
  {
    id: 2,
    img: BsBarChartLine,
    fig: "₦ 1,300",
    bg: "#ECEAFF",
    color: "#817AF3",
    label: "Revenue",
  },
  {
    id: 3,
    img: VscGraphLine,
    fig: "₦ 868",
    bg: "#FFEEDB",
    color: "rgba(219, 163, 98, 0.8)",
    label: "Profit",
  },
  {
    id: 4,
    img: GiExpense,
    fig: "₦ 1,432",
    bg: "#EBFFED",
    color: "rgba(88, 211, 101, 0.7);",
    label: "Cost",
  },
];

export const purchase = [
  {
    id: 1,
    fig: "₦ 832",
    color: "#009ED8",
    bg: "#E5F6FD",
    img: SlHandbag,
    label: "Purchase",
  },
  {
    id: 2,
    img: GiExpense,
    fig: "₦ 1,300",
    bg: "#EBFFED",
    color: "rgba(88, 211, 101, 0.7);",
    label: "Cost",
  },
  {
    id: 3,
    img: MdOutlineCancelPresentation,
    fig: "₦ 868",
    bg: "#ECEAFF",
    color: "#817AF3",
    label: "Cancel",
  },
  {
    id: 4,
    img: VscGraphLine,
    fig: "₦ 1,432",
    bg: "#FFEEDB",
    color: "rgba(219, 163, 98, 0.8)",
    label: "Return",
  },
];

export const inventory = [
  {
    id: 1,
    fig: "₦ 868",
    color: "#DBA362",
    bg: "#FFEEDB",
    img: GoPackage,
    label: "Sales",
  },
  {
    id: 2,
    img: MdOutlineAddLocationAlt,
    fig: "200",
    bg: "#ECEAFF",
    color: "rgba(129, 122, 243, 0.6)",
    label: "Revenue",
  },
];

export const product = [
  {
    id: 1,
    fig: "₦868",
    color: "#24B8F1",
    bg: "#E5F7FD",
    img: FaRegUserCircle,
    label: "Suppliers",
  },
  {
    id: 2,
    img: CgFileDocument,
    fig: "200",
    bg: "#ECEAFF",
    color: "#817AF3",
    label: "Categories",
  },
];

export const calFil = ["Daily", "Weekly", "Monthly"];

export const sellHead = [
  "Name",
  "Sold Quantity",
  "Remaining Quantity",
  "Price",
];

export const stock = [
  {
    id: 1,
    img: snack1,
    title: "Tata Salt",
  },
  {
    id: 2,
    img: snack2,
    title: "Lays",
  },
  {
    id: 3,
    img: snack2,
    title: "Lays",
  },
];

export const activeStyle = {
  color: "#1570EF",
  alignItems: "center",
  display: "flex",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "6px 0 2px 0",
  padding: "13px 0",
  borderRadius: "10px",
};
