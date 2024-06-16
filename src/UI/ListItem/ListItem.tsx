import { FC, ReactNode, memo } from "react";
import clsx from "clsx";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  children: ReactNode;
  extraStyles?: string;
};

const ListItem: FC<ListItemProps> = memo(({ children, extraStyles }) => {
  const style: string = clsx(styles.listItem, extraStyles || "");

  return <li className={style}>{children}</li>;
});

export default ListItem;
