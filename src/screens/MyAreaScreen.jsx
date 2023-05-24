import Header from "./Header";
import SearchBox from "../components/SearchBox";
import StatesTable from "../components/StatesTable";
import { useSetRecoilState, useRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";
import { selectedTypeState } from "../atoms/SelectedTypeState";
import { selectedAreaState } from "../atoms/SelectedAreaState";
import { selectedNameState } from "../atoms/SelectedNameState";
import { selectedStatusState } from "../atoms/SelectedStatusState";

const MyAreaScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  const setSelectedType = useSetRecoilState(selectedTypeState);
  const setSelectedArea = useSetRecoilState(selectedAreaState);
  const setSelectedName = useSetRecoilState(selectedNameState);
  const setSelectedStatus = useSetRecoilState(selectedStatusState);
  //レンダリング時にmyAreaOpenStateをtrueにする
  setMyAreaOpen(true);
  //レンダリング時に検索条件をリセットする
  setSelectedType("");
  setSelectedArea("");
  setSelectedName("");
  setSelectedStatus("");

  // /api/myareaにGETリクエストを送る

  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <StatesTable></StatesTable>
    </>
  );
};

export default MyAreaScreen;
