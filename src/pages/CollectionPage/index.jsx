import * as S from "./styles";
import CollectionFilter from "./components/CollectionFilter";
import CollectionList from "./components/CollectionList";
function CollectionPage() {
  return (
    <div>
      <CollectionFilter />
      <CollectionList />
      <CollectionList />
    </div>
  );
}

export default CollectionPage;
