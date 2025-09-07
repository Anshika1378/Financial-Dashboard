import { NextResponse } from "next/server";

export async function GET(request) {
  // optional: read range param
  const url = new URL(request.url);
  const range = url.searchParams.get("range") || "30";

  // mock clients with labels inside bubbles (numbers shown in image)
  const clients = [
    { x: 30, y: 40, r: 80, label: 3824 },
    { x: 55, y: 20, r: 60, label: 541 },
    { x: 70, y: 60, r: 40, label: 60 },
    { x: 20, y: 80, r: 20, label: 2 },
  ];

  const data = {
    aum: 12190000,
    sip: 139000,
    stats: {
      purchases: 0,
      redemptions: 0,
      rejected: 0,
      sipRejected: 0,
      newSip: 0,
    },
    clients,
    sipBusiness: {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"],
      bars: [10, 20, 30, 40, 25],
      line: [8, 18, 28, 35, 20],
    },
    monthlyMis: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      lines: [
        [0.1, 0.2, 0.25, 0.4, 0.6, 0.35],
        [0.05, 0.15, 0.2, 0.3, 0.5, 0.25],
        [0.02, 0.1, 0.15, 0.25, 0.4, 0.2],
      ],
    },
  };

  return NextResponse.json(data);
}
