"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// module.css가 마치 자바스크립트를 불러온 것처럼 생각
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path == "/" ? "🌱" : ""}
        </li>
        <li>
          <Link href="/about-us">About US</Link>{" "}
          {path == "/about-us" ? "🌱" : ""}
        </li>
      </ul>
    </nav>
  );
}
