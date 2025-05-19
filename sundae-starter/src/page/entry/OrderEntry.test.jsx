import { render, screen } from "@testing-library/react";
import OrderEntry from "./OrderEntry";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

test("OrderEntry handles error for scoops", async () => {
  // 기존 핸들러는 유지하고 특정 경로만 오버라이드
  server.use(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  // 오류 요소가 나타날 때까지 기다림
  const alerts = await screen.findAllByRole("alert");

  // 알림이 표시되는지 확인
  expect(alerts).toHaveLength(1);
  // 또는 특정 오류 메시지를 확인
  // expect(alerts[0]).toHaveTextContent("서버에서 스쿱 데이터를 가져오는 데 오류가 발생했습니다");
});
