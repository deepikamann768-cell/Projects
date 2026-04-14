import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{
        height: "90vh",
        backgroundImage: "url('/background.avif')",   // ✅ very easy
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white"
      }}>
        <h1>Play. Compete. Win.</h1>
        <h3>Your ultimate sports platform</h3>
      </div>
    </>
  );
}