import common from "../public/styles/common.module.css";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${common.navbar}`}>
        <ul className={`${common.flexBetween}`}>
          <li className={`${common.li}`}>Customers</li>
          <li className={`${common.li}`}>Khata</li>
          <li className={`${common.li}`}>Payment Record</li>
          <li className={`${common.li}`}>Monthly Report</li>
          <li className={`${common.li}`}>Daily Deduction</li>
        </ul>
        <ul className={`${common.flexBetween}`}>
          <li className={`${common.li}`}>login</li>
          <li className={`${common.li}`}>log out</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
