import * as React from "react";
import {
  CommandBar,
  ICommandBarItemProps,
} from "@fluentui/react/lib/CommandBar";
import { IButtonProps } from "@fluentui/react/lib/Button";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons(/* optional base url */);
const overflowProps: IButtonProps = { ariaLabel: "More commands" };

export const CommandBarBasicExample: React.FunctionComponent = () => {
  return (
    <CommandBar
      items={_items}
      overflowItems={_overflowItems}
      overflowButtonProps={overflowProps}
      farItems={_farItems}
      ariaLabel="Inbox actions"
      primaryGroupAriaLabel="Email actions"
      farItemsGroupAriaLabel="More actions"
    />
  );
};

const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "New",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    iconProps: { iconName: "Add" },
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
          ["data-automation-id"]: "newEmailButton", // optional
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" },
        },
      ],
    },
  },
  {
    key: "upload",
    text: "Upload",
    iconProps: { iconName: "Upload" },
    subMenuProps: {
      items: [
        {
          key: "uploadfile",
          text: "File",
          preferMenuTargetAsEventTarget: true,
        },
        {
          key: "uploadfolder",
          text: "Folder",
          preferMenuTargetAsEventTarget: true,
        },
      ],
    },
  },
  {
    key: "share",
    text: "Share",
    iconProps: { iconName: "Share" },
  },
  {
    key: "download",
    text: "Download",
    iconProps: { iconName: "Download" },
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  {
    key: "move",
    text: "Move to...",
    iconProps: { iconName: "MoveToFolder" },
  },
  {
    key: "copy",
    text: "Copy to...",
    iconProps: { iconName: "Copy" },
  },
  {
    key: "rename",
    text: "Rename...",
    iconProps: { iconName: "Edit" },
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "tile",
    text: "Grid view",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Grid view",
    iconOnly: true,
    iconProps: { iconName: "Tiles" },
  },
  {
    key: "info",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "Info" },
  },
];
