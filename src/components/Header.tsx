import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { handleLogout } from "../helper";
import useAuth from "../hooks/authHooks";
import { useRouterNavigate } from "../hooks/navigationHooks";

// Menu items for guest (non-authenticated users)
const guestMenuItems = [
  { name: "Events", route: "/bailamos-nextui-frontend/" },
  { name: "Organizer", route: "/bailamos-nextui-frontend/profile" },
  { name: "Login", route: "/bailamos-nextui-frontend/login", action: "login" },
];

// Menu items for authenticated users
const userMenuItems = [
  { name: "Events", route: "/bailamos-nextui-frontend/" },
  { name: "Organizer", route: "/bailamos-nextui-frontend/profile" },
  { name: "Sign Out", route: "/bailamos-nextui-frontend/", action: "logout" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const user = useAuth();
  const navBarMenuItems = user ? userMenuItems : guestMenuItems;
  const navigate = useRouterNavigate();

  const handleMenuItemClick = (route: string, action?: string) => {
    if (action === "logout") {
      handleLogout();
    }

    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className="flex w-screen mb-4 bg-secondary"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="bg-secondary sm:hidden"
        />
        <NavbarBrand className="flex justify-start">
          <h2 className="font-bold text-inherit">Bailamos</h2>
        </NavbarBrand>
      </NavbarContent>

      {/* Header section not on mobile */}
      <NavbarContent className="hidden sm:flex gap-4">
        {userMenuItems.slice(0, 2).map(({ name, route }) => (
          <NavbarItem key={name}>
            <Link className="text-lg" href={route} aria-current="page">
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {user ? (
        <NavbarItem>
          <Button
            className="text-md hover:bg-red-500"
            onClick={() =>
              handleMenuItemClick("/bailamos-nextui-frontend/", "logout")
            }
          >
            Sign Out
          </Button>
        </NavbarItem>
      ) : (
        <NavbarItem>
          <Button
            className="text-md hover:bg-primary hover:text-gray-800"
            onClick={() =>
              handleMenuItemClick("/bailamos-nextui-frontend/login")
            }
          >
            Login
          </Button>
        </NavbarItem>
      )}

      {/* Header section on mobile */}
      <NavbarMenu className="bg-transparent">
        {navBarMenuItems.map(({ name, route, action }) => (
          <NavbarMenuItem key={name}>
            <Link
              className="w-full text-gray-200"
              href={route}
              size="lg"
              onClick={() => {
                handleMenuItemClick(route, action);
              }}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
