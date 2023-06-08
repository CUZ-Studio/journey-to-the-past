import { FURO_API_BASE_URL } from "@/constants/api";
import useHasClientId from "@/hooks/useHasClientId";

export default function HomePage() {
  const hasClientId = useHasClientId();

  const loginWithKakao = () => {
    window.location.assign(
      `${FURO_API_BASE_URL}/oauth?platform=kakao&public_api_key=${process.env.NEXT_PUBLIC_FURO_PUBLIC_API_KEY}`,
    );
  };

  return (
    <div>
      <button type="button" onClick={loginWithKakao} disabled={!hasClientId}>
        카카오 로그인
      </button>
    </div>
  );
}
