import { View, Text } from "react-native";
import * as DropdownMenu from "zeego/dropdown-menu";
import React from "react";
import RoundBtn from "./RoundButton";

const Dropdown = () => {
  return (
    // <DropdownMenu.Root>
    //   <DropdownMenu.Trigger>
    //     <RoundBtn icon={"ellipsis-horizontal"} text={"More"} />
    //   </DropdownMenu.Trigger>
    // </DropdownMenu.Root>
    <RoundBtn icon={"ellipsis-horizontal"} text={"More"} />
  );
};

export default Dropdown;
