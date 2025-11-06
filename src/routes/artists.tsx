import React, { useState } from "react";

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
}

const Artists = () => {
  const [artists, setArtists] = useState([
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

  const [editingArtist, setEditingArtist] = useState<Artist | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [newArtist, setNewArtist] = useState({
    name: "",
    genre: "",
    image: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered artist list
  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add new artist
  const handleAddArtist = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!newArtist.name || !newArtist.genre) return alert("Fill all fields");
    const newEntry = {
      id: Date.now(),
      ...newArtist,
      image:
        newArtist.image ||
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    };
    setArtists([...artists, newEntry]);
    setNewArtist({ name: "", genre: "", image: "" });
  };

  // Delete artist
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this artist?")) {
      setArtists(artists.filter((artist) => artist.id !== id));
    }
  };

  // Edit artist
  const handleEdit = (artist: Artist) => {
    setEditingArtist(artist);
  };

  const handleUpdate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!editingArtist) return;
    setArtists(
      artists.map((artist) =>
        artist.id === editingArtist.id ? editingArtist : artist
      )
    );
    setEditingArtist(null);
  };

  return (
    <div className="p-6">
      <h1 className="mt-8 mb-4 text-2xl sm:text-3xl font-semibold text-[#0A7692] dark:text-[var(--text-heading)]">
        Artists Management
      </h1>

      {/* Search bar */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search artists..."
          className="dark:text-[var(--dark-text)] border border-gray-300 rounded-md p-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#0A7692]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Add new artist form */}
        <form
          onSubmit={handleAddArtist}
          className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2"
        >
          <input
            type="text"
            placeholder="Name"
            value={newArtist.name}
            onChange={(e) =>
              setNewArtist({ ...newArtist, name: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 text-sm"
          />
          <input
            type="text"
            placeholder="Genre"
            value={newArtist.genre}
            onChange={(e) =>
              setNewArtist({ ...newArtist, genre: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 text-sm"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newArtist.image}
            onChange={(e) =>
              setNewArtist({ ...newArtist, image: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 text-sm"
          />
          <button
            type="submit"
            className="bg-[#0A7692] text-white px-3 py-2 rounded-md text-sm hover:bg-[#095f76]"
          >
            Add
          </button>
        </form>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white dark:bg-[var(--table-body-bg)] rounded-lg shadow-lg hover:shadow-xl transition-all p-4 text-center"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-[#0A7692] dark:text-[var(--dark-text)]">
                {artist.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{artist.genre}</p>
              <div className="mt-3 flex justify-center gap-2">
                <button
                  onClick={() => setSelectedArtist(artist)}
                  className="bg-[#0A7692] text-white px-3 py-1 rounded-md text-sm hover:bg-[#095f76]"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(artist)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(artist.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No artists found.</p>
        )}
      </div>

      {/* View Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 sm:w-96 text-center">
            <img
              src={selectedArtist.image}
              alt={selectedArtist.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
            />
            <h2 className="text-xl font-semibold text-[#0A7692] dark:text-[var(--dark-text)]">
              {selectedArtist.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {selectedArtist.genre}
            </p>
            <button
              onClick={() => setSelectedArtist(null)}
              className="mt-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-md text-sm hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Artist Modal */}
      {editingArtist && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 sm:w-96 text-center">
            <h2 className="text-xl font-semibold mb-3 text-[#0A7692]">
              Edit Artist
            </h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                value={editingArtist.name}
                onChange={(e) =>
                  setEditingArtist({
                    ...editingArtist,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
              <input
                type="text"
                value={editingArtist.genre}
                onChange={(e) =>
                  setEditingArtist({
                    ...editingArtist,
                    genre: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
              <input
                type="text"
                value={editingArtist.image}
                onChange={(e) =>
                  setEditingArtist({
                    ...editingArtist,
                    image: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setEditingArtist(null)}
                  className="bg-gray-300 px-3 py-1 rounded-md text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0A7692] text-white px-3 py-1 rounded-md text-sm hover:bg-[#095f76]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;
