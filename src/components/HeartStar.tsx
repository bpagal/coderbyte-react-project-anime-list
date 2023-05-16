interface StarProps {
  type: 'heart' | 'star';
  isActive: boolean;
  handleClick: () => void;
}

const HeartStar = ({ type, isActive, handleClick }: StarProps) => {
  const icon = type === 'heart' ? '❤️' : '⭐';

  if (isActive) {
    return (
      <h1
        className="text-xl cursor-pointer mx-1"
        style={{
          userSelect: 'none',
        }}
        onClick={handleClick}
      >
        {icon}
      </h1>
    );
  }

  return (
    <h1
      className="text-xl text-transparent cursor-pointer mx-1 "
      style={{
        textShadow: '0 0 0 gray',
        userSelect: 'none',
      }}
      onClick={handleClick}
    >
      {icon}
    </h1>
  );
};

export default HeartStar;
