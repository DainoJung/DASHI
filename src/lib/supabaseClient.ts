import { createClient } from '@supabase/supabase-js';

// 환경 변수에서 Supabase URL과 익명 키 가져오기
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// 필수 환경 변수가 없으면 오류 발생
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL과 익명 키가 필요합니다. .env.local 파일을 확인하세요.');
}

// Supabase 클라이언트 생성 및 내보내기
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 