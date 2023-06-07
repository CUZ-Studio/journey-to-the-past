import { useRouter } from "next/router";

export default function Customize() {
  const router = useRouter();
  return (
    <div>
      Custom
      <button type="button" onClick={() => router.push("/play")}>
        플레이하러!
      </button>
    </div>
  );
}
