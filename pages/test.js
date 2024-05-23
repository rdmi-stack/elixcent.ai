import { useState } from 'react';

const TestPage = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Test Page</h1>

      <div className="mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 active:scale-95 transition-transform"
          onClick={handleClick}
        >
          Click Me
        </button>
        <span className="text-xl">Clicked {clickCount} times</span>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Column 1</th>
            <th className="py-2 px-4 border-b">Column 2</th>
            <th className="py-2 px-4 border-b">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Row 1, Cell 1</td>
            <td className="py-2 px-4 border-b">Row 1, Cell 2</td>
            <td className="py-2 px-4 border-b">Row 1, Cell 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Row 2, Cell 1</td>
            <td className="py-2 px-4 border-b">Row 2, Cell 2</td>
            <td className="py-2 px-4 border-b">Row 2, Cell 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Row 3, Cell 1</td>
            <td className="py-2 px-4 border-b">Row 3, Cell 2</td>
            <td className="py-2 px-4 border-b">Row 3, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestPage;
