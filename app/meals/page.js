import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getAllMeals } from "@/lib/meals";
import { Suspense } from "react";
import mealsLoadingPage from "./loadingState";

export const metadata = {
  title: "All Meals",
  description:
    "Browse the delicious meals shared by our food-loving vibrant community.",
};

async function Meals() {
  const meals = await getAllMeals(); // Fetch meals data, simulating a delay
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={mealsLoadingPage()}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
