import React from "react";
import styles from "./cardlist.module.css";
import Link from "next/link";
import Image from "next/image";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
//   const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
          </div>
          <Pagination/>
    </div>
  );
};

export default CategoryList;
