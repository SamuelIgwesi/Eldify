import React, { useState } from "react";

const Albums = () => {
  const [albums] = useState([
    {
      id: 1,
      title: "Waves of Sound",
      artist: "John Doe",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
    },
    {
      id: 2,
      title: "Urban Dreams",
      artist: "Jane Smith",
      cover:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    },
    {
      id: 3,
      title: "Midnight Vibes",
      artist: "Michael Lee",
      cover:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    },
    {
      id: 4,
      title: "Soul Journey",
      artist: "Sophia Brown",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
    },
    {
      id: 5,
      title: "Echoes",
      artist: "Samuel Igwesi",
      cover:
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<{
    id: number;
    title: string;
    artist: string;
    cover: string;
  } | null>(null);
  const handleViewDetails = (album: {
    id: number;
    title: string;
    artist: string;
    cover: string;
  }) => {
    setSelectedAlbum(album);
  };

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="mt-8 mb-4 text-2xl sm:text-3xl font-semibold text-[#0A7692] dark:text-[var(--text-heading)]">
        Albums
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search albums..."
          className="dark:text-[var(--dark-text)] border border-gray-300 rounded-md p-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0A7692]">
                  {album.title}
                </h3>
                <p className="text-gray-600">{album.artist}</p>
                <button
                  onClick={() => handleViewDetails(album)}
                  className="mt-3 bg-[#0A7692] text-white px-4 py-2 rounded-md text-sm hover:bg-[#095f76] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No albums found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96 text-center relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
            <img
              src={selectedAlbum.cover}
              alt={selectedAlbum.title}
              className="w-40 h-40 mx-auto rounded-md object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-[#0A7692]">
              {selectedAlbum.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedAlbum.artist}</p>
            <button
              onClick={() => alert(`Playing "${selectedAlbum.title}" 🎵`)}
              className="bg-[#0A7692] text-white px-5 py-2 rounded-md text-sm hover:bg-[#095f76] transition"
            >
              Play Album
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
