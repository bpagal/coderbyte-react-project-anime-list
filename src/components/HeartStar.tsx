interface StarProps {
  type: 'heart' | 'star';
  isActive: boolean;
  handleClick: () => void;
}

const HeartStar = ({ type, isActive, handleClick }: StarProps) => {
  const icon = type === 'heart' ? '❤️' : '⭐';

  const handleIconClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.stopPropagation();
    handleClick();
  };

  if (isActive) {
    return (
      <span
        className="text-xl cursor-pointer mx-1"
        style={{
          userSelect: 'none',
        }}
        onClick={handleIconClick}
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      className="text-xl text-transparent cursor-pointer mx-1 "
      style={{
        textShadow: '0 0 0 gray',
        userSelect: 'none',
      }}
      onClick={handleIconClick}
    >
      {icon}
    </span>
  );
};

export default HeartStar;
