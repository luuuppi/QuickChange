import { FC, ReactNode, memo } from "react";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  children: ReactNode;
};

const ListItem: FC<ListItemProps> = memo(({ children }) => {
  return <li className={styles.listItem}>{children}</li>;
});

export default ListItem;
