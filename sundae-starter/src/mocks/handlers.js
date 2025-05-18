import { http, HttpResponse } from "msw";

// MOck 생성
export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];
