import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { ModeToggle } from "../theme/mode-toggle";
import { cn } from "@/lib/utils";

import hannaImage from "../../assets/hanna.jpeg";
import naghmehImage from "../../assets/naghmeh.jpeg";
import raanaImage from "../../assets/raana.jpeg";
import sixtenImage from "../../assets/sixten.jpeg";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const isLoggedIn = () => {
    return localStorage.getItem("token") != undefined;
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink to="/">Home</HoveredLink>
        <HoveredLink to="/movies">All Movies</HoveredLink>
        <HoveredLink to="/aboutus">About Us</HoveredLink>
        <HoveredLink to="/privacy-policy">Privacy Policy</HoveredLink>

        <MenuItem setActive={setActive} active={active} item="Operation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/add">Add New</HoveredLink>
          </div>
        </MenuItem>

        <ModeToggle />

        {isLoggedIn() && <HoveredLink to="/logout">Log Out</HoveredLink>}
      </Menu>
    </div>
  );
}

export default Navbar;
