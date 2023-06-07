import { ReactNode, useEffect } from "react";

import Header from "@/components/organisms/Header";
import useAuthActions from "@/hooks/useAuthActions";

import { Inner, Root } from "./styles";

interface Props {
  children: ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const { setHasClientId } = useAuthActions();

  useEffect(() => {
    setHasClientId(!!process.env.NEXT_PUBLIC_FURO_CLIENT_ID);
  }, []);

  return (
    <Root>
      <Header />
      <Inner>{children}</Inner>
    </Root>
  );
}
