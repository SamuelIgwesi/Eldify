import Header from "./Components/Header.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import StatsCard from "./Components/StatsCard.jsx";

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <Sidebar />
        <StatsCard title="Total Users" value="2456" />
        <StatsCard title="Total Songs" value="324" />
        <StatsCard title="Monthly Streams" value="1834" />
      </div>
    </>
  );
}

export default App;
