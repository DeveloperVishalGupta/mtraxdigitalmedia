'use client'
import { useState } from 'react';
import { headings } from '../constant';
import { useRouter } from 'next/navigation';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const suggestions = headings.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(suggestions);
  };

  const handleSelect = (item) => {
    // Navigate and scroll to section
    router.push(`${item.page}#${item.id}`);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Search headings..."
        value={query}
        onChange={handleChange}
      />
      {filtered.length > 0 && (
        <ul className="border rounded mt-2 shadow bg-white">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
