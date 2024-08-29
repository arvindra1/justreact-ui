import * as React from "react";
import { css, ClassNames } from "@emotion/react";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface HeaderProp extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface SideBarProp extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  color?: string;
  width?: string;
}

const Root = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      className={className}
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100%",
        margin: 0,
      }}
    />
  )
);
Root.displayName = "Root";

const Header = React.forwardRef<HTMLDivElement, HeaderProp>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
Header.displayName = "Header";

const SideBar = React.forwardRef<HTMLDivElement, SideBarProp>(
  ({ className, color = "gray", width = "15%", ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
      style={{
        height: "100vh",
        width: width,
        overflowY: "auto",
        background: color,
        padding: "20px",
        boxSizing: "border-box",
      }}
    />
  )
);
SideBar.displayName = "SideBar";

const Content = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      {...props}
      style={{
        padding: "10px",
        overflowY: "auto",
        flex: 1,
      }}
    />
  )
);
Content.displayName = "Content";

export const Layout: {
  Root: typeof Root;
  Header: typeof Header;
  SideBar: typeof SideBar;
  Content: typeof Content;
} = { Root, Header, SideBar, Content };
