import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { ModeToggle } from "../theme/mode-toggle";
import { cn } from "@/lib/utils";


import hannaImage from '../../assets/hanna.jpeg';
import naghmehImage from '../../assets/naghmeh.jpeg';
import raanaImage from '../../assets/raana.jpeg';
import sixtenImage from '../../assets/sixten.jpeg';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);




  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink to="/">Home</HoveredLink>
        <HoveredLink to="/movies">All Movies</HoveredLink>
        <HoveredLink to="/aboutus">About Us</HoveredLink>
        {/* Add Privacy Policy link */}
        <HoveredLink to="/privacy-policy">Privacy Policy</HoveredLink> {/* New link */}

        {/* <MenuItem setActive={setActive} active={active} item="We"> */}
          {/* <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Hanna"
              href="https://algochurn.com"
              src={hannaImage}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Naghmeh"
              href="https://tailwindmasterkit.com"
              src={naghmehImage}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Raana"
              href="https://gomoonbeam.com"
              src={raanaImage}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Sixten"
              href="https://userogue.com"
              src={sixtenImage}
              description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI"
            />
          </div> */}
        {/* </MenuItem> */}
        
        <MenuItem setActive={setActive} active={active} item="Operation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/add">Add New</HoveredLink>
          </div>
        </MenuItem>
        <ModeToggle />
        <HoveredLink to="/logout">Loug Out</HoveredLink>
      
      </Menu>
    </div>
  );
}

export default Navbar;
