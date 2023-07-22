import React from 'react';

const Filters = () => {
  return (
    <div className="container mx-auto pt-10">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <select className="rounded-2xl bg-white p-2 border border-gray-300">
            <option value="">Other categories</option>
          </select>
          <select className="rounded-2xl bg-white p-2 border border-gray-300">
            <option value="">Other topics</option>
          </select>
        </div>
        <select className="rounded-2xl bg-white p-2 border border-gray-300">
            <option value="">Most recent</option>
          </select>
      </div>

    </div>
  );
};

export default Filters;
