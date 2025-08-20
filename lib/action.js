"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title")?.toString().trim() || "",
    summary: formData.get("summary")?.toString().trim() || "",
    instructions: formData.get("instructions")?.toString().trim() || "",
    image: formData.get("image") || null, // this will be a File
    creator: formData.get("name")?.toString().trim() || "",
    creator_email: formData.get("email")?.toString().trim() || "",
  };

  // minimal validation
  if (!meal.title) throw new Error("Title is required");
  if (!meal.instructions) throw new Error("Instructions are required");
  if (!meal.image) throw new Error("Image is required");

  await saveMeal(meal);
  redirect("/meals");
}
