import { Header } from "../../shared/components/Header/Header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWords, wordsOwn } from "../../redux/words/operations";
import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";
import {
  allWords,
  ownWords,
  totalPagesWords,
} from "../../redux/words/wordsSelector";
import TableComponent from "../../shared/components/TableComponent/TableComponent";
import {
  ButtonPagination,
  SvgStep,
  WrapPagination,
  WrapperDashboards,
} from "../../shared/components/TableComponent/TableComponent.styled";
import Filtered from "../../shared/components/Filtered/Filtered";
import { useParams } from "react-router-dom";
import sprite from "../../shared/images/symbol-defs.svg";

export const ScreenPage = () => {
  const dispatch = useDispatch();
  const recommend = useSelector(allWords);
  const dictionary = useSelector(ownWords);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(totalPagesWords);
  const [perPage, setPerPage] = useState("");

  useEffect(() => {
    if (id === "recommend") {
      setPerPage(recommend.length);
    }
    if (id === "dictionary") {
      setPerPage(dictionary.length);
    }
  }, [dispatch, recommend, dictionary, id]);

  useEffect(() => {
    setCurrentPage(1);
  }, [id, totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleIncrement = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDecrement = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPageButtons = () => {
    const visiblePages = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    if (startPage > 1) {
      visiblePages.push({ value: 1, key: 1 });
    }

    if (startPage > 2) {
      visiblePages.push({ value: "...", key: "start-ellipsis" });
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push({ value: i, key: i });
    }

    if (endPage < totalPages - 1) {
      visiblePages.push({ value: "...", key: "end-ellipsis" });
    }

    if (endPage < totalPages) {
      visiblePages.push({ value: totalPages, key: totalPages });
    }

    return visiblePages.map(({ value, key }) => (
      <ButtonPagination
        key={key}
        onClick={() => (value !== "..." ? handlePageChange(value) : null)}
        disabled={value === "..." || value === currentPage}
      >
        {value}
      </ButtonPagination>
    ));
  };

  const columnsRecommend = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    { Header: "", accessor: "..." },
  ];
  const columnsDictionary = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    {
      Header: "Progress",
      accessor: "progress",
      Cell: ({ row }) => {
        const progress = row.values.progress || 0;
        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        return (
          <>
            <div
              onClick={handleClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "space-evenly",
              }}
            >
              <p>{progress}%</p>
              <CircularProgress
                variant="determinate"
                value={progress}
                thickness={5}
                sx={{
                  width: "26px",
                  color: "rgba(43, 214, 39, 1)",
                  borderRadius: "50%",
                  border: "5px solid rgba(212, 248, 211, 1)",
                }}
              />
            </div>
          </>
        );
      },
    },
    { Header: "", accessor: "..." },
  ];
  useEffect(() => {
    dispatch(fetchWords());
    dispatch(wordsOwn());
  }, [dispatch]);

  return (
    <>
      <Header />
      <WrapperDashboards>
        {id === "recommend" && (
          <>
            <Filtered currentPage={currentPage} perPage={perPage} />
            <TableComponent columns={columnsRecommend} data={recommend} />
          </>
        )}
        {id === "dictionary" && (
          <>
            <Filtered currentPage={currentPage} perPage={perPage} />
            <TableComponent columns={columnsDictionary} data={dictionary} />
          </>
        )}
        <WrapPagination>
          <ButtonPagination onClick={() => handlePageChange(1)}>
            <SvgStep>
              <use href={sprite + "#icon-first"}></use>
            </SvgStep>
          </ButtonPagination>
          <ButtonPagination onClick={handleDecrement}>
            <SvgStep>
              <use href={sprite + "#icon-prev"}></use>
            </SvgStep>
          </ButtonPagination>
          {renderPageButtons()}
          <ButtonPagination onClick={handleIncrement}>
            <SvgStep>
              <use href={sprite + "#icon-next"}></use>
            </SvgStep>
          </ButtonPagination>
          <ButtonPagination onClick={() => handlePageChange(totalPages)}>
            <SvgStep>
              <use href={sprite + "#icon-last"}></use>
            </SvgStep>
          </ButtonPagination>
        </WrapPagination>
      </WrapperDashboards>
    </>
  );
};
