export default function Table() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 mt-16">Recent Activities</h2>
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-[#0A7692] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Song</th>
            <th className="py-3 px-4 text-left">Artist</th>
            <th className="py-3 px-4 text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4">Overflow</td>
            <td className="py-3 px-4">Sinach</td>
            <td className="py-3 px-4">2023</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Overflow</td>
            <td className="py-3 px-4">Sinach</td>
            <td className="py-3 px-4">2023</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Overflow</td>
            <td className="py-3 px-4">Sinach</td>
            <td className="py-3 px-4">2023</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Overflow</td>
            <td className="py-3 px-4">Sinach</td>
            <td className="py-3 px-4">2023</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Overflow</td>
            <td className="py-3 px-4">Sinach</td>
            <td className="py-3 px-4">2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
