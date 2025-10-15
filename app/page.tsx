export const metadata = {
  title: "Site en construction",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#f9fafb",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        🚧 Site en construction 🚧
      </h1>
      <p style={{ maxWidth: "400px", textAlign: "center", lineHeight: 1.6 }}>
        Ce site est actuellement en cours de développement. Revenez bientôt pour
        découvrir la version complète !
      </p>
    </main>
  );
}
