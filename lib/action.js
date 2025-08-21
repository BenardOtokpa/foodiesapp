"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title")?.toString().trim() || "",
    summary: formData.get("summary")?.toString().trim() || "",
    instructions: formData.get("instructions")?.toString().trim() || "",
    image: formData.get("image") || null, // this will be a File
    creator: formData.get("name")?.toString().trim() || "",
    creator_email: formData.get("email")?.toString().trim() || "",
  };

  // minimal validation
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "invalid input - please check your data",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
