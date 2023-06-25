import { useEffect } from "react";
import { useRouter } from "next/router";

/* 리액트 새로고침 시, 최상단으로 이동 */

export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
