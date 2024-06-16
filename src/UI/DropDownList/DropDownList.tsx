import { ChangeEvent, FC, ReactNode, memo } from "react";
import clsx from "clsx";
import styles from "./DropDownList.module.scss";

type DropDownListProps = {
  children: ReactNode;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  extraStyles: string;
};

const DropDownList: FC<DropDownListProps> = memo((props) => {
  const { children, changeHandler, placeholder, extraStyles } = props;
  const style: string = clsx(styles.DropDownList, extraStyles || "");

  return (
    <div className={style}>
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className={styles.DropDownList__searchInput}
        onChange={(e) => changeHandler(e)}
      />
      <ul className={styles.DropDownList__list}>{children}</ul>
    </div>
  );
});

export default DropDownList;
