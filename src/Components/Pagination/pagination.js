import React, { useState} from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import "./pagination.css";
import Song from "../Song/song"
const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContext);
    setCurrentPage(pageNumber);
  };
  const getSongs = () => {
    const start = currentPage * dataLimit - dataLimit;
    const end = start + dataLimit;
    return data.slice(start, end);
  };

  const getPages = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div className="getSongs">
        {getSongs().map((data, index) => (
          <RenderComponent key={index} data={data} />
        ))}
      </div>
      <div className="pages">
        <ButtonBack onClick={previousPage}> Previous </ButtonBack>
        {getPages().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >{item}</button>
        ))}

        <ButtonNext onClick={nextPage}>Next</ButtonNext>
      </div>
    </>
  );
};
export default Pagination;
