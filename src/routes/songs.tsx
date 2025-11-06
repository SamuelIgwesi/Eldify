import { useState } from "react";

export default function Songs() {
  const songs = [
    { id: 1, title: "Forever Yours", artist: "Adele", plays: 12000 },
    { id: 2, title: "Ocean Eyes", artist: "Billie Eilish", plays: 18500 },
    { id: 3, title: "Blinding Lights", artist: "The Weeknd", plays: 24000 },
    { id: 4, title: "Shape of You", artist: "Ed Sheeran", plays: 30000 },
  ];

  const [searchSong, setSearchSong] = useState("");

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <div>
      <h1 className="mt-16 mb-4 text-2xl sm:text-3xl font-semibold text-[var(--brand-color)] dark:text-[var(--text-heading)]">
        Songs
      </h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Songs"
        className="dark:text-[var(--dark-text)] border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
        value={searchSong}
        onChange={(e) => setSearchSong(e.target.value)}
      />

      {/* Songs Table */}
      <div className="p-6 rounded-lg shadow-lg">
        <table className="min-w-full rounded-lg text-left dark:bg-[var(--table-body-bg)] border-b-gray-200 text-white">
          <thead className="bg-[var(--brand-color)] dark:text-[var(--dark-text)] text-xs sm:text-sm dark:bg-[var(--table-header-bg)]">
            <tr className="border-b border-gray-400">
              <th className="pb-2 px-2">S/N</th>
              <th className="pb-2 px-2">Title</th>
              <th className="pb-2 px-2">Artist</th>
              <th className="pb-2 px-2">Plays</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song, index) => (
                <tr
                  key={song.id}
                  className="border-b dark:text-[var(--dark-text)] dark:hover:bg-[var(--table-hover)] border-gray-700 hover:bg-gray-300 transition"
                >
                  <td className="py-2 px-2">{index + 1}</td>
                  <td className="py-2 px-2">{song.title}</td>
                  <td className="py-2 px-2">{song.artist}</td>
                  <td className="py-2 px-2">{song.plays.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-3 text-center text-gray-500 text-sm"
                >
                  No songs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
