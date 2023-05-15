import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req);
  const data = await req.json();
  let proccesedData = { ...data, accepted: true };

  return NextResponse.json(proccesedData);
}
