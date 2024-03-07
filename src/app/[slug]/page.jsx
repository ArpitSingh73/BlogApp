import React from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
function singlepage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>ewfr gteab ryn waf qav fvs dbsg bg</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Arpit</span>
              <span className={styles.date}>21211</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              ergW reagnira lorem rknvfin fabinor ewirjeoiw cnzv fgsnoierap
              fdnboiaern earijapn cmzvxlvnif aelfknbpfia{" "}
            </p>
            <h2>header of sfjvnfoinb </h2>
            <p>
              ergW reagnira lorem rknvfin fabinor ewirjeoiw cnzv fgsnoierap
              fdnboiaern earijapn cmzvxlvnif aelfknbpfia{" "}
            </p>
            <p>
              ergW reagnira lorem rknvfin fabinor ewirjeoiw cnzv fgsnoierap
              fdnboiaern earijapn cmzvxlvnif aelfknbpfia{" "}
            </p>
            <p>
              ergW reagnira lorem rknvfin fabinor ewirjeoiw cnzv fgsnoierap
              fdnboiaern earijapn cmzvxlvnif aelfknbpfia{" "}
            </p>
          </div>
          <div className={styles.comment}>
            <Comments></Comments>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default singlepage;
