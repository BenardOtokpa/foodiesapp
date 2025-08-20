"use client";

import { useActionState } from "react";

export function MealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
