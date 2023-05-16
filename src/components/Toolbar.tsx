import { useState } from 'react';
import HeartStar from './HeartStar';

interface ToolbarProps {
  resultCount: number;
}

const Toolbar = ({ resultCount }: ToolbarProps) => {
  const [isStarActive, setIsStarActive] = useState(false);
  const [isHeartActive, setIsHeartActive] = useState(false);

  return (
    <div className="flex justify-between bg-blue-500 p-4">
      <div className="flex">
        <h2>Filter</h2>
        <HeartStar
          type="star"
          isActive={isStarActive}
          handleClick={() => {
            setIsStarActive((prev) => !prev);
          }}
        />
        <HeartStar
          type="heart"
          isActive={isHeartActive}
          handleClick={() => {
            setIsHeartActive((prev) => !prev);
          }}
        />
      </div>
      <input type="text" placeholder="Search anime" />
      <h2 className="text-lg">{resultCount} results</h2>
    </div>
  );
};

export default Toolbar;
