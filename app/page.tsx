import Image from "next/image";
// import styles from "./page.module.css";
import { Fira_Code } from "@next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={firacode.className}>
      <h1 className="text-3xl">Hello NEXT 13 🔥</h1>
    </main>
  );
}
