export const metadata = {
  title: "Page de test — non indexable",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Page de test Next.js non indexée</h1>
      <p>Essai temporaire.</p>
    </main>
  );
}
