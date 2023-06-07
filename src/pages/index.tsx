import { useFuro } from "furo-react";

import useHasClientId from "@/hooks/useHasClientId";

export default function HomePage() {
  const { loginWithRedirect } = useFuro();
  const hasClientId = useHasClientId();
  return (
    <div>
      <button type="button" onClick={loginWithRedirect} disabled={!hasClientId}>
        로그인하러 가기
      </button>
    </div>
  );
}
