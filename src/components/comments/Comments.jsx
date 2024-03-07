import React from "react";
import Image from "next/image";
import styles from "./comments.module.css";
function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment ...."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Arpit Singh</span>
              <span className={styles.date}>111111</span>
            </div>
          </div>
          <p className={styles.desc}>
            wqfeihof poPW49 R2QW3ER isb opfdap afbdskjfo apsgjrpeoa vnxjcnvOIJBH
            OIGIjr fjznlnd PSOJPODAJD ijsgponj g
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
