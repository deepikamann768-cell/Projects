import Navbar from "../components/Navbar";

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <div className="section">
        <h1>What Users Say</h1>

        <div className="grid">
          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"Amazing platform for sports lovers!"</p>
            <h4>- Rahul</h4>
          </div>

          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"Best place to find tournaments."</p>
            <h4>- Priya</h4>
          </div>

          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"Very easy to use and modern UI."</p>
            <h4>- Aman</h4>
          </div>
        </div>
      </div>
    </>
  );
}