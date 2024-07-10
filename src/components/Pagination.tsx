import React from "react";

interface PaginationProps {
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, setPage }) => {
  const handleClick = (e: any) => {
    setPage(e.target.value * 5);
  };

  const handleNext = () => {
    if (page <= count) setPage(page + 5);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 5);
  };

  const aux = Array.from(Array(count));

  console.log(aux);

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {Array.from(Array(5), (e, i) => {
        return (
          <button value={i} onClick={(event) => handleClick(event)}>
            {i + 1}
          </button>
        );
      })}
      <input type="number" name="" id="" />
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Pagination;
