import StatsCard from "../Components/Statscard";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import Table from "../Components/Table";
import UserArtistChart from "../Components/Charts";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StatsCard title="Users" value="1,204" Icon={PersonIcon} />
        <StatsCard title="Artists" value="238" Icon={Diversity3Icon} />
        <StatsCard title="Songs" value="5,678" Icon={LibraryMusicIcon} />
        <StatsCard title="Albums" value="421" Icon={CollectionsBookmarkIcon} />
      </div>
      <UserArtistChart />
      <Table />
    </>
  );
};

export default Dashboard;
