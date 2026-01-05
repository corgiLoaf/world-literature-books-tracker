# world-literature-books

세계문학전집 독서 트래커 (Next.js + Bun)

## 스택

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Bun 런타임/패키지 매니저

## 개발 서버

```bash
bun install
bun dev
```

브라우저에서 http://localhost:3000 확인.

## 스크립트

- `bun dev` : 개발 서버
- `bun run lint` : ESLint
- `bun run build` : 프로덕션 빌드
- `bun start` : 빌드된 앱 실행

## 목표 기능(요약)

- 헤더: 로고, 검색, 다크/라이트 토글, 읽은 책/읽고있는 책/완독률, 프로그레스 바
- 본문: 책 목록(to-read / in-progress / done), 상태별 체크박스 아이콘
- 추후: Supabase 연동, 로그인, 상태 동기화
