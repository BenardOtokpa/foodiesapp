import Link from "next/link";
import logoImg from "@assets/logo.png";
import classes from "./mainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "../navLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="a plate of food" priority />
          NextLevel Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>{" "}
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
