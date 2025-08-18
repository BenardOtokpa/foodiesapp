export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal Page for {params.slug}
      </h1>
    </main>
  );
}