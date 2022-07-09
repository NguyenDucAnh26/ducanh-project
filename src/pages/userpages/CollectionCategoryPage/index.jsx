import * as S from "./styles";
import CollectionFilter from "./components/CollectionFilter";
import CollectionList from "./components/CollectionList";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getColorListAction,
  getCategoryListAction,
} from "../../../redux/actions";
import { useLocation } from "react-router-dom";
function CollectionCategoryPage() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryListAction());
  }, []);
  const { categoryList } = useSelector((state) => state.category);
  const [filterParams, setFilterParams] = useState({
    keyword: "",
    categoryIds: [],
  });
  const categoryFilter = categoryList.data.filter((item) => item.id === 1);

  // const renderListByCategory = categoryFilter.map(item => ({
  //   return

  // }))

  function handleSearh(value) {
    setFilterParams({
      ...filterParams,
      keyword: value,
    });
    dispatch(
      getColorListAction({
        ...filterParams,
        keyword: value,
      })
    );
  }
  return (
    <div>
      <CollectionFilter
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        handleSearh={handleSearh}
      />
      <CollectionList filterId={state} />
    </div>
  );
}

export default CollectionCategoryPage;
