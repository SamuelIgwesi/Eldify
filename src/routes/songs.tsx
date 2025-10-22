import React from "react";

export default function Songs() {
  const songs = [
    { id: 1, title: "Forever Yours", artist: "Adele", plays: 12000 },
    { id: 2, title: "Ocean Eyes", artist: "Billie Eilish", plays: 18500 },
    { id: 3, title: "Blinding Lights", artist: "The Weeknd", plays: 24000 },
    { id: 4, title: "Shape of You", artist: "Ed Sheeran", plays: 30000 },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mt-16 mb-3 text-[var(--brand-color)] dark:text-[var(--text-heading)]">
        Songs
      </h1>

      <div className=" p-6 rounded-lg shadow-lg">
        <table className="min-w-full rounded-lg text-left dark:bg-[var(--table-body-bg)] border-b-gray-200 text-white">
          <thead className="bg-[var(--brand-color)] dark:text-[var(--dark-text)] text-xs sm:text-sm dark:bg-[var(--table-header-bg)] px-4 py-32">
            <tr className="border-b border-gray-400">
              <th className="pb-2">S/N</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Artist</th>
              <th className="pb-2">Plays</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {songs.map((song, index) => (
              <tr
                key={song.id}
                className="border-b dark:text-[var(--dark-text)]  dark:hover:bg-[var(--table-hover)] border-gray-700 hover:bg-gray-300 transition"
              >
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{song.title}</td>
                <td className="py-2">{song.artist}</td>
                <td className="py-2">{song.plays.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
