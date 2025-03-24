import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo
} from "@/components/icons";
import { AnimatedLogo } from "@/components/animated-logo";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 backdrop-blur-xl backdrop-saturate-150 bg-opacity-70",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="backdrop-blur-md backdrop-saturate-150 bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-0 h-[200px] w-[400px] rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl dark:from-primary-700/30 dark:to-secondary-700/30 animate-float-slow" />
        <div className="absolute -top-40 right-0 h-[200px] w-[400px] rounded-full bg-gradient-to-r from-secondary-400/20 to-accent/20 blur-3xl dark:from-secondary-700/30 dark:to-accent/30 animate-float-slow-reverse" />
      </div>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <AnimatedLogo />
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium relative group transition-transform hover:-translate-y-0.5 active:translate-y-0"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {[
            { icon: TwitterIcon, href: siteConfig.links.twitter, title: "Twitter" },
            { icon: DiscordIcon, href: siteConfig.links.discord, title: "Discord" },
            { icon: GithubIcon, href: siteConfig.links.github, title: "GitHub" },
          ].map(({ icon: Icon, href, title }) => (
            <Link 
              key={href}
              isExternal 
              href={href} 
              title={title}
              className="transition-transform hover:-translate-y-0.5 hover:scale-110 active:translate-y-0 active:scale-90"
            >
              <Icon className="text-default-500 hover:text-primary transition-colors" />
            </Link>
          ))}
          <ThemeSwitch className="ml-2" />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal bg-gradient-to-r from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 dark:from-primary-400/10 dark:to-secondary-400/10 dark:hover:from-primary-400/20 dark:hover:to-secondary-400/20 text-gray-700 dark:text-gray-300 transition-transform hover:scale-105 active:scale-95"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-xl backdrop-saturate-150 bg-white/70 dark:bg-gray-900/70">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem 
              key={`${item}-${index}`}
              className={`animate-fade-in-up [animation-delay:${index * 100}ms]`}
            >
              <Link
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors w-full"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
