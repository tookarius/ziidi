import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const targetUrl = 'https://briceka.com/ziidi' + req.nextUrl.pathname.replace('/api/proxy', '');
  const search = req.nextUrl.search;
  
  const res = await fetch(targetUrl + search, {
    method: 'GET',
    headers: {
      ...Object.fromEntries(req.headers.entries()),
      host: 'briceka.com'
    },
  });

  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      ...Object.fromEntries(res.headers.entries()),
      'Access-Control-Allow-Origin': '*',
    }
  });
}
