import React, { useState } from "react";

interface MenuBarProps {
  items: string[];
  onItemClick: (item: string) => void;
  defaultSelected?: string;
  selectedItem?: string;
  selectbg?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({
  items,
  onItemClick,
  defaultSelected,
  selectedItem,
  selectbg = "#e0e0e0",
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);

  const handleItemClick = (item: string) => {
    setSelected(item);
    onItemClick(item);
  };

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            style={{
              cursor: "pointer",
              fontWeight:
                selected === item || selectedItem === item ? "bold" : "normal",
              backgroundColor:
                selected === item || selectedItem === item
                  ? selectbg
                  : "transparent",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
