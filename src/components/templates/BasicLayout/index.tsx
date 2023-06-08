import { ReactNode, useEffect } from "react";
import axios from "axios";

import Header from "@/components/organisms/Header";
import { FURO_API_BASE_URL } from "@/constants/api";
import useAuthActions from "@/hooks/useAuthActions";
import useProjectActions from "@/hooks/useProjectActions";

import { Inner, Root } from "./styles";

interface Props {
  children: ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const { setHasClientId } = useAuthActions();
  const { setProject } = useProjectActions();

  useEffect(() => {
    setHasClientId(!!process.env.NEXT_PUBLIC_FURO_CLIENT_ID);
  }, []);

  useEffect(() => {
    axios
      .get(`${FURO_API_BASE_URL}/public/projects/${process.env.NEXT_PUBLIC_FURO_PROJECT_ID}`, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_FURO_AUTHORIZATION_TOKEN,
        },
      })
      .then((res) => {
        const { pid, client_id, callback_url, sign_in_methods } = res.data;
        setProject({
          pid,
          client_id,
          callback_url,
          kakao_client_id: sign_in_methods.kakao.client_id,
          hasClientId: !!client_id,
        });
      });
  }, [FURO_API_BASE_URL]);

  return (
    <Root>
      <Header />
      <Inner>{children}</Inner>
    </Root>
  );
}
