import { FC, ReactNode, memo } from "react";
import clsx from "clsx";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  children: ReactNode;
  extraStyles?: string;
  clickHandler: () => void;
};

const ListItem: FC<ListItemProps> = memo(({ children, extraStyles, clickHandler }) => {
  const style: string = clsx(styles.listItem, extraStyles || "");

  return (
    <li className={style} onClick={() => clickHandler()}>
      {children}
    </li>
  );
});

export default ListItem;
