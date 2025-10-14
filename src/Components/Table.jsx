import { useState } from "react";

export default function Table() {
  const [uploads] = useState([
    { id: 1, song: "Overflow", artist: "Sinach", year: 2023 },
    { id: 2, song: "Imole de", artist: "Dunsin", year: 2023 },
    { id: 3, song: "Great are you Lord", artist: "Sinach", year: 2023 },
    { id: 4, song: "Way Maker", artist: "Sinach", year: 2023 },
    { id: 5, song: "Excess Love", artist: "Mercy Chinwo", year: 2023 },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 mt-16">Recent Uploads</h2>
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-[#0A7692] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Song</th>
            <th className="py-3 px-4 text-left">Artist</th>
            <th className="py-3 px-4 text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload) => (
            <tr
              key={upload.id}
              className="hover:bg-gray-300 transition-colors duration-200 border-b"
            >
              <td className="py-3 px-4">{upload.song}</td>
              <td className="py-3 px-4">{upload.artist}</td>
              <td className="py-3 px-4">{upload.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
