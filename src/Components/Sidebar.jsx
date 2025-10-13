import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <DashboardIcon fontSize="inherit" /> Dashboard
          </a>
        </li>
        <li>
          <a href="/songs">
            <LibraryMusicIcon fontSize="inherit" /> Songs
          </a>
        </li>
        <li>
          <a href="/artists">
            <Diversity3Icon fontSize="inherit" /> Artists
          </a>
        </li>
        <li>
          <a href="/albums">
            <CollectionsBookmarkIcon fontSize="inherit" /> Albums
          </a>
        </li>
        <li>
          <a href="/users">
            <PersonIcon fontSize="inherit" /> Users
          </a>
        </li>
        <li>
          <a href="/reports">
            <AssessmentIcon fontSize="inherit" /> Reports
          </a>
        </li>
      </ul>
    </nav>
  );
}
