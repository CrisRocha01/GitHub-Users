import Logo from "../../assets/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    priority={true}
                    src={Logo}
                    alt="Github Logo"
                    height={48}
                    width={223}
                />
            </Link>
        </header>
    );
}
