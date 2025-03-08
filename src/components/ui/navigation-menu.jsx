import * as React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "shadcn-ui"; // Ensure you've installed ShadCN

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/about" className="text-lg font-medium text-gray-800 hover:text-blue-600">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/projects" className="text-lg font-medium text-gray-800 hover:text-blue-600">Projects</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;