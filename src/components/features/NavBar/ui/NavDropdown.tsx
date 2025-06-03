import {Button, Dropdown, type MenuProps} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {NavLink} from "react-router";
import {type FC, useMemo} from "react";
import type {NavProps} from "../lib/type.ts";

const NavDropdown: FC<NavProps> = ({routes}) => {

  const items: MenuProps['items'] = useMemo(() => routes.map((route, i) => ({
    label: (
      <NavLink to={route.path}>
        {route.title}
      </NavLink>
    ),
    key: i,
  })), [routes]);


  return (
    <Dropdown
      trigger={["click"]}
      menu={{items}}
      placement={"bottomRight"}
    >
      <Button
        icon={<MenuOutlined />}
        type="text"
      />
    </Dropdown>
  );
};

export default NavDropdown;