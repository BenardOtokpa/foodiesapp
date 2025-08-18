import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
export default function MealsPage() {
  return;
  <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created {""}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun{" "}
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">share your favorite recipe</Link>
      </p>
    </header>
    <main>
      <MealsGrid meals={[]} />
    </main>
  </>;
}
