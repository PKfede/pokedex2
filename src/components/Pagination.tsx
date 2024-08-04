import React, { useEffect, useState } from "react";
import style from "../styles/pagination.module.css"

interface PaginationProps {
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, setPage }) => {

  const [arr, setArr] = useState<number[]>([])
  const [active, setActive] = useState(false)


  const handlePage = (val: number) => () => {
    setPage(val);

  };

  const handleInput = (val: number) => {

    // if (!arr.includes(val)) {
    //   console.log("hey");
    //   console.log(arr, "new");
    // }
    if (val <= Math.ceil(count / 5) && val > 0) {
      setPage(val);
    }

  }

  const handleNext = () => {
    if (page < Math.ceil(count / 5)) {
      setPage(page + 1)

    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  };

  const intervals = () => {
    const aux2: number[] = []
    const startingIndex = page <= 2 ? 1 : page - 2;
    const upperThreshold = page <= 2 ? startingIndex + 5 : page + 3;

    for (let i = startingIndex; i < upperThreshold; i += 1) {
      if (i <= Math.ceil(count / 5))
        aux2.push(i)
    }

    if (aux2.length < 5) {
      const tempLength = aux2.length

      for (let i = 1; i <= (5 - tempLength); i++) {
        aux2.unshift(aux2[0] - 1)
      }
    }
    setArr(aux2)
  }

  useEffect(() => {
    intervals()
  }, [page])

  const handleActive = () => {
    setActive(true)
  }

  return (
    <div className={style.Pagination}>
      <button onClick={handlePrev}>Prev</button>
      {
        arr.map((val: any) => {
          return <button id={val} key={val} className={val === page ? style.active : style.inactive} onClick={handlePage(val)}>
            {val}
          </button>
        })
      }
      <button hidden={active ? true : false} onClick={handleActive}>...</button>
      {
        active && <input type="number" min={1} onChange={(e) => handleInput(Number(e.target.value))} />
      }
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Pagination;
