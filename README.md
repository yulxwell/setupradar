# SetupRadar (v0.2.0 - Gear Finders Update)

## 📍 주요 경로 (Routes)
- 한국어 기본 경로: `/kr`
- 도구 목록: `/kr/tests`
- 구매 가이드: `/kr/guides`
- 장비 찾기: `/kr/finder/mouse-fit`

PC 하드웨어(마우스, 키보드, 모니터) 진단 및 구매 가이드를 제공하는 정적 웹 플랫폼입니다.

## 🚀 프로젝트 목표
- **사용자 중심 진단**: 복잡한 소프트웨어 설치 없이 브라우저에서 즉시 하드웨어 상태 체크.
- **초보자 가이드**: IT 전문 용어를 최소화하고 구매 결정에 직결되는 핵심 정보 제공.
- **가볍고 빠른 서비스**: Next.js App Router 기반의 완전 정적 사이트로 서버 비용 0원 및 고속 로딩 실현.

## ✅ v0.1 구현 완료 항목
### 진단 도구 (Tests)
1. **모니터 불량화소 테스트**: 9가지 색상 전체화면 진단, ESC/UI 컨트롤 최적화.
2. **빛샘 / IPS Glow 테스트**: 환경 준비 안내 및 Glow 현상 판별 가이드 포함.
3. **마우스 더블클릭 테스트**: 80ms 임계값 기반 채터링 진단 및 상세 로그 제공.
4. **CPS 테스트**: 5/10/30초 모드 및 브라우저 기반 최고 기록 저장.
5. **폴링레이트 측정**: 실시간 Hz 측정, 8K/동글 연결 주의사항 및 브라우저 측정 한계 안내.

### 구매 가이드 (Guides)
- 게이밍 마우스 vs 일반 마우스 (센서/무게/스위치 중심)
- 8K 폴링레이트 체감 가이드 (모니터/CPU 의존성 중심)
- 불량화소 및 무결점 정책 (브랜드별 규정 차이 중심)
- 빛샘 vs IPS Glow 판별법 (패널 특성 이해 중심)
- 풀알루미늄 키보드 입문 (타건감 및 관리법 중심)

## 📦 배포 가이드 (Cloudflare Pages)
본 프로젝트는 완전 정적 사이트(Static Site Generation)로 구성되어 있으며, **Cloudflare Pages** 배포를 기준으로 운영됩니다.

### Cloudflare Pages 설정
1. Cloudflare 대시보드에서 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git** 선택.
2. 빌드 설정:
   - **Framework preset**: `Next.js` 또는 `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
3. 환경 변수: 없음 (완전 정적)

## 🛠 아키텍처 제약 사항 (Strict Restrictions)
- **No Database/API**: Supabase 포함 모든 외부 DB 및 서버 API 사용 없음.
- **No Dynamic Data**: 실시간 최저가 크롤링, 외부 상품 DB 연동 없음.
- **No User System**: 회원가입, 로그인, 개인 데이터 서버 저장 없음.
- **No AI Functions**: AI를 이용한 콘텐츠 요약이나 생성 기능 포함 없음.
- **No Environment Variables**: 배포 시 별도의 환경 변수 설정이 필요하지 않음.

## 📅 v0.2 예정 항목 (Future Roadmap)
- **Mouse Fit Finder**: 실제 손 크기/그립법 데이터 기반 정밀 추천 알고리즘.
- **Keyboard Finder**: 타건음 선호도 및 배열 기반 제품 매칭.
- **추가 테스트**: 키보드 무한 동시입력(Rollover), 모니터 잔상(Ghosting).
- **다국어 확장**: EN, JA, ZH 로케일 데이터 적용.

## 📝 배포 전 체크리스트
- [x] `npm run build` 오류 없이 완료 여부 (`out` 폴더 생성 확인)
- [x] 모든 테스트 페이지 하단에 Disclaimer(면책 문구) 포함 여부
- [x] 모바일 브라우저에서 전체화면 진입 및 색상 전환 정상 작동 확인
- [x] '시작하기' 등 주요 CTA 버튼의 시인성 확보
