import { useFuro } from "furo-react";

import useAuthActions from "@/hooks/useAuthActions";

import { Inner, Root } from "./styles";

export default function Header() {
  const { logout } = useFuro();
  const { authorize } = useAuthActions();

  const handleLogout = () => {
    logout();
    authorize(null);
  };

  return (
    <Root>
      <Inner>
        <p>홈</p>
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </Inner>
    </Root>
  );
}
