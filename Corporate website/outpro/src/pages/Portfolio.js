import Navbar from "../components/Navbar";

export default function Events() {
  const events = [
    {
      title: "Football Championship",
      date: "20 May 2026",
      img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"
    },
    {
      title: "Cricket League",
      date: "5 June 2026",
      img: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6"
    },
    {
      title: "Badminton Tournament",
      date: "15 June 2026",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="section">
        <h1>Upcoming Events</h1>

        <div className="event-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              
              <img src={event.img} alt={event.title} />

              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <button className="btn">Join Event</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}