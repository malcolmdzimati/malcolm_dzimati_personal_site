"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isOpen}
      onMenuOpenChange={setIsOpen}
      classNames={{
        base: "bg-background/80 backdrop-blur-md border-b border-border",
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/" onClick={onClose}>
            <Logo />
            <p className="font-serif italic text-lg text-foreground">Malcolm Dzimati</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-1 justify-start ml-6">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href={item.href}
                >
                  <span className={isActive ? "text-foreground" : ""}>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn} className="text-muted-foreground hover:text-accent transition-colors">
            <LinkedInIcon />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github} className="text-muted-foreground hover:text-accent transition-colors">
            <GithubIcon />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-md">
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.label}>
              <Link color="foreground" href={item.href} size="lg" onClick={onClose}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex gap-4 pt-4 mt-2 border-t border-border">
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn} className="text-muted-foreground">
              <LinkedInIcon />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github} className="text-muted-foreground">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
