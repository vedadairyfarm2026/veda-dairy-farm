import Image from "next/image";
import Link from "next/link";
import styles from "./site-chrome.module.css";

export function SiteBrand({ href = "/", eager = false, onClick }: { href?: string; eager?: boolean; onClick?: () => void }) {
  return <Link className={styles.brand} href={href} aria-label="Veda Dairy Farm home" onClick={onClick}>
    <Image src="/assets/design/veda-logo.webp" alt="" width={52} height={52} loading={eager ? "eager" : "lazy"} />
    <span><strong>Veda</strong><small>Dairy Farm</small></span>
  </Link>;
}
