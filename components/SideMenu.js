import Head from "next/head";
import Image from "next/image";
import styles from "../styles/SideMenu.module.css";

import { FcHome } from "react-icons/fc";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaIndustry, FaServer } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { useRouter } from "next/router";

export default function SideMenu() {
  const router = useRouter();
  return (
    <div className={styles.container_sidemenu}>
      <FcHome
        className="icon_bar"
        onClick={() => router.push({ pathname: "/" })}
      ></FcHome>
      <FaIndustry
        className="icon_bar"
        onClick={() => router.push({ pathname: "/createmachine" })}
      ></FaIndustry>
      <BsFillPlusCircleFill
        className="icon_bar"
        onClick={() => router.push({ pathname: "/createdevice" })}
      ></BsFillPlusCircleFill>
      <GoGraph
        className="icon_bar"
        onClick={() => router.push({ pathname: "/dashboard" })}
      ></GoGraph>
      <FaServer
        className="icon_bar"
        onClick={() => router.push({ pathname: "/server" })}
      ></FaServer>
    </div>
  );
}
