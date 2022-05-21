import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

export default function Home({ list_machine_1 }) {
  const [list_machines, setlist_machine] = useState([]);
  const get_machine = () => {
    fetch("http://127.0.0.1:8000/create_machine/", {
      method: "GET",
      headers: { "content-Type": "application/json" },
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then((json_response) => {
          setlist_machine(json_response["result"]);
          return false;
        });
      } else {
        alert("fallo");
      }
    });

    // if (response.status === 200) {
    //   console.log(response);
    // } else {
    //   alert("Error");
    // }
  };
  useEffect(() => {
    get_machine();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <SideMenu></SideMenu>
        <div className={styles.container_machine}>
          {list_machines.map((item, index) => {
            return (
              <div
                key={"list" + String(index)}
                className={styles.machine_label}
              >
                - {item.machine_name}
              </div>
            );
          })}
        </div>
      </main>
      <div></div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch("http://127.0.0.1:8000/create_machine/");
  const list_machine = await apiResponse.json();
  return { props: { list_machine } };
};
