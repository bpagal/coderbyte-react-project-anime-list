import { useState } from 'react';
import HeartStar from './HeartStar';

interface ToolbarProps {
  resultCount: number;
  filterValue: string;
  setFilterValue: (val: string) => void;
  isStarFilterActive: boolean;
  setIsStarFilterActive: () => void;
}

const Toolbar = ({
  resultCount,
  filterValue,
  setFilterValue,
  isStarFilterActive,
  setIsStarFilterActive,
}: ToolbarProps) => {
  return (
    <div className="flex justify-between bg- p-4">
      <div className="flex">
        <h2>Filter</h2>
        <HeartStar
          type="star"
          isActive={isStarFilterActive}
          handleClick={setIsStarFilterActive}
        />
        {/* <HeartStar
          type="heart"
          isActive={isHeartActive}
          handleClick={() => {
            setIsHeartActive((prev) => !prev);
          }}
        /> */}
      </div>
      <input
        className="
      py-3 px-4 text-gray-950 rounded-md  focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-700 "
        type="text"
        placeholder="Search anime"
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
      />
      <h2 className="text-lg">{resultCount} results</h2>
    </div>
  );
};

export default Toolbar;
