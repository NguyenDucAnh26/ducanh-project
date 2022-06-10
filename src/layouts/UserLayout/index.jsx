import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styles";
function UserLayout() {
  const [isShowMenuHeader, setIsShowMenuHeader] = useState(false);
  const [isShowMenuAbout, setIsShowMenuAbout] = useState(false);

  return (
    <>
      <Header
        isShowMenuHeader={isShowMenuHeader}
        setIsShowMenuHeader={setIsShowMenuHeader}
        isShowMenuAbout={isShowMenuAbout}
        setIsShowMenuAbout={setIsShowMenuAbout}
      />
      <S.Layout
        isShowMenuAbout={isShowMenuAbout}
        isShowMenuHeader={isShowMenuHeader}
      >
        <S.mainContainer>
          <Outlet />
        </S.mainContainer>
        <Footer />
      </S.Layout>
    </>
  );
}

export default UserLayout;
