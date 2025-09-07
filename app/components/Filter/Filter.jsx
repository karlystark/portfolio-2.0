'use client';
import React from 'react';

export default function Filter({ categoryData, totalCount, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 pl-8 pb-8 space-y-2">
      {/* "All projects" filter */}
      <p
        onClick={() => onSelectCategory(null)}
        className={`cursor-pointer pb-4 ${
          selectedCategory === null
            ? 'underline decoration-wavy decoration-2 underline-offset-6'
            : ''
        }`}
      >
        explore all projects ({totalCount})
      </p>

      {/* Categories */}
      {Object.entries(categoryData).map(([category, count]) => (
        <p
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`cursor-pointer ${
            selectedCategory === category
              ? 'underline decoration-wavy decoration-2 underline-offset-6'
              : ''
          }`}
        >
          {category} ({count})
        </p>
      ))}
    </div>
  );
}
