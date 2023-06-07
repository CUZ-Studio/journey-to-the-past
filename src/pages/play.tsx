import { useRouter } from "next/router";

import ControlPanel from "@/components/organisms/ControlPanel";

export default function Play() {
  const router = useRouter();
  return (
    <div>
      <main>
        <ControlPanel />
      </main>
      <div>
        <button type="button" onClick={() => router.push("/")}>
          종료
        </button>
      </div>
    </div>
  );
}
