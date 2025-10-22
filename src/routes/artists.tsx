import React, { useState } from "react";

const Artists = () => {
  // Dummy artist data
  const [artists] = useState([
    {
      id: 1,
      name: "John Legend",
      genre: "Soul / R&B",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500",
    },
    {
      id: 2,
      name: "Ariana Grande",
      genre: "Pop",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 3,
      name: "Drake",
      genre: "Hip-Hop",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500",
    },
    {
      id: 4,
      name: "Billie Eilish",
      genre: "Alternative",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 5,
      name: "Samuel Igwesi",
      genre: "Afrobeats",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className=" mt-8 mb-4 text-2xl sm:text-3xl font-semibold text-[#0A7692] dark:text-[var(--text-heading)]">
        Artists
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search artists..."
          className="dark:text-[var(--dark-text)] border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-4 text-center"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-[#0A7692]">
                {artist.name}
              </h3>
              <p className="text-gray-600">{artist.genre}</p>
              <button className="mt-3 bg-[#0A7692] text-white px-4 py-2 rounded-md text-sm hover:bg-[#095f76] transition">
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No artists found.</p>
        )}
      </div>
    </div>
  );
};

export default Artists;
