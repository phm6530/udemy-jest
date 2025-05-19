import { http, HttpResponse } from "msw";
const BASEURL = "http://localhost:3030";

// MOck 생성
export const handlers = [
  http.get(`${BASEURL}/scoops`, () => {
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),

  http.get(`${BASEURL}/toppings`, () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "/images/chocolate.png" },
      { name: "M&Ms", imagePath: "/images/chocolate.png" },
      { name: "Hot fudge", imagePath: "/images/chocolate.png" },
    ]);
  }),
];
