import { NextResponse } from 'next/server';

/**
 * Wrapper de resposta padrão para APIs.
 */
export function successResponse(data: any) {
  return NextResponse.json({ success: true, data }, { status: 200 });
}

export function errorResponse(message: string, status: number = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}
