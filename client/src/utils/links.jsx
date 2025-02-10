import {
  LayoutDashboard,
  LineChart,
  BookOpen,
  Settings,
  Users,
  History,
  Target,
} from "lucide-react";

const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    text: "Trading Journal",
    path: "/dashboard/journal",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    text: "Trade History",
    path: "/dashboard/history",
    icon: <History className="w-5 h-5" />,
  },
  {
    text: "Analytics",
    path: "/dashboard/analytics",
    icon: <LineChart className="w-5 h-5" />,
  },
  {
    text: "Trading Goals",
    path: "/dashboard/goals",
    icon: <Target className="w-5 h-5" />,
  },
  {
    text: "Settings",
    path: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    text: "Admin",
    path: "/dashboard/admin",
    icon: <Users className="w-5 h-5" />,
  },
];

export default links;
