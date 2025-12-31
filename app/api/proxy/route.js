import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Build the target URL
  const path = req.nextUrl.pathname.replace("/api/proxy", "");
  const search = req.nextUrl.search;
  const targetUrl = `https://briceka.com/QuickLoan${path}${search}`;

  // Forward the request
  const res = await fetch(targetUrl, {
    method: "GET",
    headers: {
      ...Object.fromEntries(req.headers.entries()),
      host: "briceka.com"
    },
  });

  // Return the response
  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      ...Object.fromEntries(res.headers.entries()),
      "Access-Control-Allow-Origin": "*",
    }
  });
}

// Optional: proxy POST requests too
export async function POST(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/proxy", "");
  const search = req.nextUrl.search;
  const targetUrl = `https://briceka.com/QuickLoan${path}${search}`;

  const res = await fetch(targetUrl, {
    method: "POST",
    headers: {
      ...Object.fromEntries(req.headers.entries()),
      host: "briceka.com"
    },
    body: await req.arrayBuffer()
  });

  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      ...Object.fromEntries(res.headers.entries()),
      "Access-Control-Allow-Origin": "*",
    }
  });
}
