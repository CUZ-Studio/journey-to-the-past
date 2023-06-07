import { MouseEventHandler, ReactNode } from "react";

import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export default function BasicButton({ children, onClick }: Props) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}
