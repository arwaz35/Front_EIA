import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";

import { BsCheckAll } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export default function Message(prop) {
  return (
    <div className={styles.container_message}>
      <BsCheckAll
        className="icon_bar"
        style={{ color: "blue", marginRight: "20px" }}
      ></BsCheckAll>
      <div className={styles.client_text}>{prop?.sender}:</div>
      <div className={styles.text_message}>{prop?.message}</div>
    </div>
  );
}
