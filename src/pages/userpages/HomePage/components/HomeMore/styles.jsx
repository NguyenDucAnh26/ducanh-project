import styled from "styled-components";

export const HomeMoreContainer = styled.div`
  padding: 0 9px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const HomePageMoreCaption = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #000;
  border-radius: 24px;
  color: #fff;
  font-size: 24px;
  height: 65px;
  margin-bottom: 16px;

  @media (max-width: 990px) {
    font-size: 13px;
    height: 40px;
    border-radius: 12px;
    margin-bottom: 5px;
  }
`;
export const LinkCaption = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #2f5acf;
  color: #fff;
  font-weight: 500;
  border-radius: 24px;
  padding: 0 35px;
  font-weight: 400;
  &:hover {
    color: #000;
  }
  @media (max-width: 990px) {
    border-radius: 12px;
  }
`;
export const HomePageMoreImages = styled.div``;

export const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
