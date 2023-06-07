import { ReactNode, useEffect } from "react";
import { useFuro } from "furo-react";

interface Props {
  children: ReactNode;
}

export default function RequireAuth({ children }: Props) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log("로그인 안함");
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <>로딩중</>;
  return <>{isAuthenticated ? children : <></>}</>;
}
