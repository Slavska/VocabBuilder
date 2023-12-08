import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectStyled,
  TextFilter,
  SvgSearch,
  Label,
  KeyText,
  ValueText,
  StudyDiv,
  RightWrap,
  LeftWrap,
  WrapAll,
  WrapRightBtn,
  StyledRadio,
  StyledLabel,
  WrapRadioBtn,
  SearchButton,
} from "./Filtered.styled";
import icon from "../../images/symbol-defs.svg";
import sprite from "../../images/symbol-defs.svg";

import debounce from "lodash.debounce";
import {
  fetchCategories,
  fetchWords,
  wordsCategories,
  wordsOwn,
  wordsStatistics,
} from "../../../redux/words/operations";
import {
  Button,
  SvgArrow,
  TextTrain,
} from "../TableComponent/TableComponent.styled";
import { statisticsWords } from "../../../redux/words/wordsSelector";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import AddForm from "../Modal/AddWord/AddWord";

const Filtered = ({ currentPage, perPage }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.words.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const statistics = useSelector(statisticsWords);
  const { id } = useParams();
  const [allCategories, setAllCategories] = useState([]);
  const [selectedVerbType, setSelectedVerbType] = useState("");
  const [searchTermDebounce, setSearchTermDebounce] = useState("");

  useEffect(() => {
    if (id === "recommend") {
      dispatch(
        fetchWords({
          page: currentPage,
          category: selectedCategory,
          verb: selectedVerbType,
          search: searchTermDebounce,
          // perPage: perPage,
        })
      );
    }
    if (id === "dictionary") {
      dispatch(
        wordsOwn({
          page: currentPage,
          category: selectedCategory,
          verb: selectedVerbType,
          search: searchTermDebounce,
          // perPage: perPage,
        })
      );
    }
  }, [
    dispatch,
    id,
    currentPage,
    selectedCategory,
    selectedVerbType,
    searchTermDebounce,
    // perPage,
  ]);

  useEffect(() => {
    dispatch(wordsStatistics());
    dispatch(wordsCategories())
      .then((response) => setAllCategories(["all", ...response.payload]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [dispatch]);

  const handleVerbTypeChange = (e) => {
    const verbType = e.target.value;
    setSelectedVerbType(verbType);
  };
  const handleCategoryChange = (e) => {
    const category = e.value;
    if (category === "all") {
      setSelectedCategory("");
      setSelectedVerbType("");
    } else {
      setSelectedCategory(category);
      setSelectedVerbType("");
    }
  };
  const renderAdditionalOptions = () => {
    if (selectedCategory === "verb") {
      return (
        <>
          <WrapRadioBtn>
            <StyledLabel>
              <StyledRadio
                type="radio"
                value="false"
                checked={selectedVerbType === "false"}
                onChange={handleVerbTypeChange}
              />
              Regular
            </StyledLabel>
            <StyledLabel>
              <StyledRadio
                type="radio"
                value="true"
                checked={selectedVerbType === "true"}
                onChange={handleVerbTypeChange}
              />
              Irregular
            </StyledLabel>
          </WrapRadioBtn>
        </>
      );
    }
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTermDebounce(searchTerm);
    }
  };
  const handleSearch = () => {
    setSearchTermDebounce(searchTerm);
  };
  const customStyles = {
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      border: "none",
      outline: "none",
      boxShadow: "none",
      padding: "4px 14px",
      borderRadius: "14px",
      margin: "0px",
      cursor: "pointer",
      fontFamily: "Medium",
      background: "#FFF",
      color: isSelected ? "#121417" : "rgba(18, 20, 23, 0.3)",
      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":focus": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
      background: "FFF",
    }),
    menuList: (base) => ({
      ...base,
      background: "FFF",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,

      cursor: "pointer",
      borderRadius: "14px",
      fontFamily: "Medium",
      padding: "0px",
      background: "FFF",
      width: "189px",
      minHeight: "100%",
      justifyСontent: "center",
      alignItems: "center",
      border: "#FFF",

      color: "rgba(25, 26, 21, 0.30)",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color: "rgba(18, 20, 23, 1)",
      padding: "0px",
      margin: "0px",

      background: "FFF",
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "rgba(18, 20, 23, 1)",

      fontFamily: "Medium",
      cursor: "pointer",
      borderRadius: "14px",
      background: "FFF",
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      background: "FFF",
      color: "rgba(18, 20, 23, 1)",

      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      // background: "transparent",
      borderRadius: "20px",
      boxShadow: "none",
      color: "rgba(18, 20, 23, 1)",
      fontFamily: "Medium",
      width: "calc(100vw - 24px)",
      maxWidth: "375px",
      padding: "14px 14px",
      border: "1px solid rgba(18, 20, 23, 0.1)",

      ":active": {
        color: "rgba(18, 20, 23, 1)",
        border: "1px solid #85aa9f",
      },
      ":focus": {
        color: "rgba(18, 20, 23, 1)",
        border: "1px solid #85aa9f",
      },
      ":hover": {
        background: "#FFF",
        border: "1px solid #85aa9f",
      },
      "@media screen and (min-width: 768px)": {
        width: "auto",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(18, 20, 23, 1)",
    }),
  };

  return (
    <>
      <WrapAll>
        <LeftWrap>
          <div>
            <Label>
              <TextFilter
                type="text"
                value={searchTerm}
                placeholder="Find the word"
                onChange={handleSearchTermChange}
                onKeyPress={handleKeyPress}
              />
              <SearchButton onClick={handleSearch}>
                <SvgSearch>
                  <use href={icon + "#icon-search"}></use>
                </SvgSearch>
              </SearchButton>
            </Label>
          </div>
          <div>
            <SelectStyled
              isSearchable={false}
              placeholder={"Categories"}
              options={allCategories.map((category) => ({
                value: category,
                label: category,
              }))}
              onChange={handleCategoryChange}
              styles={customStyles}
            />
          </div>

          {renderAdditionalOptions()}
        </LeftWrap>
        <RightWrap>
          <StudyDiv>
            <KeyText>To study:</KeyText>
            <ValueText>{statistics}</ValueText>
          </StudyDiv>
          <WrapRightBtn>
            {id === "dictionary" && (
              <Button onClick={() => openModal()}>
                <TextTrain>Add word</TextTrain>
                <SvgArrow>
                  <use href={sprite + "#icon-plus"}></use>
                </SvgArrow>
              </Button>
            )}
            {isOpen && (
              <Modal onClose={closeModal} isOpen={isOpen}>
                <AddForm onClose={closeModal} />
              </Modal>
            )}
            <Button onClick={() => navigate("/training")}>
              <TextTrain>Train oneself</TextTrain>
              <SvgArrow>
                <use href={sprite + "#icon-linie"}></use>
              </SvgArrow>
            </Button>
          </WrapRightBtn>
        </RightWrap>
      </WrapAll>
    </>
  );
};

export default Filtered;
