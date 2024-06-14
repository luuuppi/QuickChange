import { ChangeEvent, FC, ReactNode, memo } from "react";
import styles from "./DropDownList.module.scss";

type DropDownListProps = {
  children: ReactNode;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const DropDownList: FC<DropDownListProps> = memo((props) => {
  const { children, changeHandler, placeholder } = props;

  return (
    <div className={styles.DropDownList}>
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
