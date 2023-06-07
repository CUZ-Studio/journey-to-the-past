import { styled } from "@mui/material/styles";

export const Root = styled("div")`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 9;
`;

export const Inner = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 425px;
  height: 100%;
  margin: 0 auto;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
