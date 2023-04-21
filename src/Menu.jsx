import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return <MenuItems key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
