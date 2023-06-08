import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RequireAuth({ children }: Props) {
  return <>{children}</>;
}
