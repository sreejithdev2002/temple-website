import Footer from "../Components/Footer";
import Header from "../Components/Header";
import EventsCard from "../Components/Upcoming Events Components/EventsCard";

function UpcomingEvents() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center m-10 gap-y-2">
        <h2 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold">UPCOMING EVENTS</h2>
        <p className="text-xs lg:text-sm text-gray-600">Explore all the upcoming events so you can plan your next visit</p>
      </div>
      <div className="flex flex-col items-center">
      <EventsCard/>
      <EventsCard/>
      <EventsCard/>
      </div>
      <Footer />
    </div>
  );
}

export default UpcomingEvents;
