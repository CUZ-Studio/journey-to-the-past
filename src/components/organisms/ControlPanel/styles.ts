import { styled } from "@mui/material/styles";

import BasicButton from "@/components/atoms/Button";

export const Container = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 36px 0;
`;

export const Wrapper = styled("div")`
  & + & {
    margin-top: 36px;
  }
`;

export const ButtonWrapper = styled("div")`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
`;

export const UpButton = styled(BasicButton)``;

export const DownButton = styled(BasicButton)``;

export const ForwardButton = styled(BasicButton)``;

export const BackwardButton = styled(BasicButton)``;

export const RightButton = styled(BasicButton)``;

export const LeftButton = styled(BasicButton)``;
