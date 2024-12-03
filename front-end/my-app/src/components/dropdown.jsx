"use client"

import { Dropdown } from "flowbite-react";

const UserDropDown = (props) => {
  return (
    <Dropdown label={props.name} dismissOnClick={false} inline>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item onClick={() => props.logout()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default UserDropDown;
