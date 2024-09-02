import React from "react";
interface MenuBarProps {
    items: string[];
    onItemClick: (item: string) => void;
    defaultSelected?: string;
    selectedItem?: string;
    selectbg?: string;
}
declare const MenuBar: React.FC<MenuBarProps>;
export default MenuBar;
//# sourceMappingURL=MenuBar.d.ts.map