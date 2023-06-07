import { styled } from "@mui/material/styles";

export const Root = styled("div")`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.common.black};
`;

export const Inner = styled("div")`
  width: 425px;
  margin: 0 auto;
  background: red;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.common.white};
`;
