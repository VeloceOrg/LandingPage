"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunIcon, MoonIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} theme`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-2 py-2 transition-opacity hover:opacity-80 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-md",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "flex items-center justify-center",
              "text-gray-700 dark:text-gray-300",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSSR && isSelected ? (
          <SunIcon size={20} />
        ) : (
          <MoonIcon size={20} />
        )}
      </div>
    </Component>
  );
};
