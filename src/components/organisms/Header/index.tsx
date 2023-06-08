import { MouseEventHandler } from "react";
import { useRouter } from "next/router";

import { Page } from "@/types";

import { Inner, Root } from "./styles";

export default function Header() {
  const router = useRouter();

  const handleLogout: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Root>
      <Inner>
        <p onClick={() => router.push(Page.HOME)}>홈</p>
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </Inner>
    </Root>
  );
}
