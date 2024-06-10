import { FC, memo } from "react";
import styles from "./ListItem.module.scss";

type ListItemProps = {
  country: string;
  name: string;
  symbol: string;
};

const ListItem: FC<ListItemProps> = memo(({ country, name, symbol }) => {
  return (
    <li className={styles.listItem}>
      <img
        className={styles.listItem__image}
        src={`https://flagcdn.com/w40/${country}.png`}
        alt={country}
      />
      <span className={styles.listItem__title}>
        {symbol} — {name}
      </span>
    </li>
  );
});

export default ListItem;
