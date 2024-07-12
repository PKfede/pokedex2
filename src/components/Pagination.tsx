import React, { useEffect, useState } from "react";
import style from "../styles/pagination.module.css"

interface PaginationProps {
  count: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, setPage }) => {

  const [arr, setArr] = useState<any>([])
  const [className, setClassName] = useState([])
  const [inputVal, setInput] = useState<any>("")
  const [active, setActive] = useState("")

  const aux: any = []

  const handlePage = (val: any) => () => {
    setActive(style.active)
    setPage(val);

  };
  const handleInput = (val: any) => {
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

  const makeClass = () => {

    setClassName(inputVal)
  }


  const intervals = () => {
    const aux2: number[] = []
    const startingIndex = page <= 2 ? 1 : page - 2;
    const upperThreshold = page <= 2 ? startingIndex + 5 : page + 3;

    for (let i = startingIndex; i < upperThreshold; i += 1) {
      if (i <= Math.ceil(count / 5))
        aux2.push(i)
    }

    if (aux2.length < 5) {
      console.log(aux2.length);
      const tempLength = aux2.length

      for (let i = 1; i <= (5 - tempLength); i++) {
        console.log(aux2[0], i);
        aux2.unshift(aux2[0] - 1)
      }
    }
    setArr(aux2)
  }

  useEffect(() => {
    intervals()
  }, [page])

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {
        arr.map((val: any) => {
          return <button key={val} className={active} onClick={handlePage(val)}>
            {val}
          </button>
        })
      }
      <input type="number" name="" id="" min={1} onChange={(e) => handleInput(Number(e.target.value))} />
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Pagination;
