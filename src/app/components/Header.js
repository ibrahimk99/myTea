import common from "../public/styles/common.module.css";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${common.navbar}`}>
        <ul className={`${common.flexBetween}`}>
          <li className={`${common.li}`}>
            <Link href="/clients">Customers</Link>
          </li>
          <li className={`${common.li}`}>Khata</li>
          <li className={`${common.li}`}>Payment Record</li>
          <li className={`${common.li}`}>Monthly Report</li>
          <li className={`${common.li}`}>Daily Deduction</li>
          <li className={`${common.li}`}>
            <Link href="/addclients">Add Clients</Link>
          </li>
        </ul>
        <ul className={`${common.flexBetween}`}>
          <li className={`${common.li}`}>login</li>
          <li className={`${common.li}`}>log out</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
