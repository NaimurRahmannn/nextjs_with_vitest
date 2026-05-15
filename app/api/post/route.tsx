import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
  ]
  return NextResponse.json(posts)
}