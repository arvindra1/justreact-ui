import * as React from "react";
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
declare const Root: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
declare const Header: React.ForwardRefExoticComponent<HeaderProp & React.RefAttributes<HTMLDivElement>>;
declare const SideBar: React.ForwardRefExoticComponent<SideBarProp & React.RefAttributes<HTMLDivElement>>;
declare const Content: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export declare const Layout: {
    Root: typeof Root;
    Header: typeof Header;
    SideBar: typeof SideBar;
    Content: typeof Content;
};
export {};
//# sourceMappingURL=Layout.d.ts.map