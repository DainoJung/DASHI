# DASHI - 디자인 포트폴리오 웹사이트

![DASHI](https://img.shields.io/badge/DASHI-디자인_에이전시-3449FF?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

웹 기반 서비스를 위한 UI/UX 디자인 전문 에이전시 DASHI의 포트폴리오 웹사이트입니다.

## 📌 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험 제공
- **포트폴리오 갤러리**: 프로젝트 작업물을 카테고리별로 볼 수 있는 포트폴리오 페이지
- **서비스 소개**: 전문 서비스 영역 소개 및 작업 프로세스 안내
- **프로젝트 문의**: 잠재 고객이 쉽게 문의할 수 있는 양식 제공
- **토글 FAQ**: 클릭하여 열고 닫을 수 있는 인터랙티브 FAQ 섹션
- **모션 효과**: Framer Motion을 활용한 부드러운 애니메이션 효과

## 🛠️ 기술 스택

- **프론트엔드**: Next.js, TypeScript, Tailwind CSS
- **상태 관리**: React Hooks
- **애니메이션**: Framer Motion
- **스타일링**: Tailwind CSS, CVA(클래스 변형 관리)
- **폼 관리**: React Hook Form

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/DainoJung/DASHI.git
cd DASHI

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

이제 브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 웹사이트를 확인할 수 있습니다.

## 📂 프로젝트 구조

```
src/
├── app/                  # 앱 라우팅
│   ├── page.tsx          # 홈페이지
│   ├── portfolio/        # 포트폴리오 페이지
│   ├── services/         # 서비스 페이지
│   ├── about/            # 회사 소개 페이지
│   └── project-inquiry/  # 프로젝트 문의 페이지
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/           # 공통 컴포넌트(버튼, 헤더, 푸터 등)
│   ├── home/             # 홈페이지 관련 컴포넌트
│   ├── portfolio/        # 포트폴리오 관련 컴포넌트
│   ├── services/         # 서비스 관련 컴포넌트
│   ├── about/            # 회사 소개 관련 컴포넌트
│   ├── project-inquiry/  # 프로젝트 문의 관련 컴포넌트
├── hooks/                # 커스텀 React 훅
└── lib/                  # 유틸리티 함수 및 헬퍼
```

## 💡 주요 페이지

- **홈**: 브랜드 소개, 서비스 미리보기, 포트폴리오 하이라이트
- **포트폴리오**: 작업물 갤러리, 모달을 통한 상세 보기
- **서비스**: 상세 서비스 설명, 작업 프로세스 시각화
- **회사 소개**: 회사 비전 및 미션, 핵심 가치
- **프로젝트 문의**: 양식, 토글 가능한 FAQ 섹션

## ✨ 디자인 시스템

- **색상**: 프라이머리(#3449FF), 다크 텍스트(#1E1E1E), 라이트 그레이(#F5F6F8)
- **타이포그래피**: 프리텐다드 또는 Inter, 반응형 크기
- **컴포넌트**: 버튼, 카드, 태그, 입력 필드 등 일관된 디자인 시스템 적용

## 📝 라이센스

이 프로젝트는 [MIT 라이센스](LICENSE)를 따릅니다. 