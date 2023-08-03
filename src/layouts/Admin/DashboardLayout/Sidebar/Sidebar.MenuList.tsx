// import { useState } from "react";

import {
  DashboardSvg,
  PensionerListSvg,
  ReportSvg,
  UsersSvg,
  SettingSvg,
  LogoutSvg,
  BankSvg,
  MasterListSvg,
} from "./SvgIcons.Sidebar";

export interface SidebarMenuListType {
  title: string;
  icon: (
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) => JSX.Element;
  path: string;
  onClick?: () => void;
}

export const SidebarMenuListTop = [
  {
    title: "Dashboard",
    icon: DashboardSvg,
    path: "/manage/dashboard",
  },
  {
    title: "Products",
    icon: MasterListSvg,
    path: "/manage/products",
  },
  // {
  //   title: "Bank",
  //   icon: BankSvg,
  //   path: "/manage/bank",
  // },
  {
    title: "Orders",
    icon: PensionerListSvg,
    path: "/manage/orders",
  },
  // {
  //   title: "Contributor List",
  //   icon: PensionerListSvg,
  //   path: "/manage/contributorlist",
  // },
  {
    title: "Report",
    icon: ReportSvg,
    path: "/manage/report",
  },
  {
    title: "Users",
    icon: UsersSvg,
    path: "/manage/users",
  },
];

export const SidebarMenuListBottom = [
  {
    title: "Settings",
    icon: SettingSvg,
    path: "/manage/settings",
  },
  {
    title: "Logout",
    icon: LogoutSvg,
    // path: "/manage/logout",
    onClick: () => {
      console.log("Logout");
    },
  },
];
