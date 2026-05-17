# SetupRadar (v0.3F - Visual Editing Workbench Ready)

## 📍 주요 경로 (Routes)
- 한국어 기본 경로: `/kr`
- 도구 목록: `/kr/tests`
- 구매 가이드: `/kr/guides`
- 장비 찾기: `/kr/finder/mouse-fit`
- 키보드 배열/스위치: `/kr/finder/keyboard-fit`

## 🗂 Repository
- GitHub repo name: `project7_setupradar`
- 이전 `setupradar` 이름에서 Project7 식별이 더 명확한 이름으로 정리했습니다.

PC 하드웨어(마우스, 키보드, 모니터) 진단 및 구매 가이드를 제공하는 정적 웹 플랫폼입니다.

## 🚀 프로젝트 목표
- **사용자 중심 진단**: 복잡한 소프트웨어 설치 없이 브라우저에서 즉시 하드웨어 상태 체크.
- **초보자 가이드**: IT 전문 용어를 최소화하고 구매 결정에 직결되는 핵심 정보 제공.
- **가볍고 빠른 서비스**: Next.js App Router 기반의 완전 정적 사이트로 서버 비용 0원 및 고속 로딩 실현.

## 📂 콘텐츠 관리 (Content Architecture)
SetupRadar는 운영 효율성을 위해 하이브리드 콘텐츠 구조를 사용합니다.
- **AI-Human 하이브리드**: `src/content/` 내 데이터는 AI 생성 초안(`ai`)과 운영자 교정본(`editor`)으로 분리 관리됩니다.
- **편집 가이드**: 상세한 데이터 수정 방법은 [docs/content-editing-guide.md](file:///Users/jilee/antigravity/src/project7/docs/content-editing-guide.md)를 참고하세요.
- **WebUI 작업대**: Project99 Control Tower를 통한 시각적 편집을 위해 [docs/content-copy-workbench.kr.json](file:///Users/jilee/antigravity/src/project7/docs/content-copy-workbench.kr.json)을 제공합니다.

## ✅ 주요 업데이트 내역
### Keyboard Product Filter Simplification
- **기본 필터 5개 원칙**: 키보드 제품 필터는 배열, 연결 방식, 키감/축 느낌, 소음, 가격대까지만 기본 노출하는 구조로 정리했습니다.
- **더보기 필터 분리**: 게이밍 기능, 멀티기기, 키캡, 하우징, 백라이트, 무게감은 선택형 더보기 필터로 분리합니다.
- **상세 스펙 분리**: 키압 세부값, 매크로, 응답속도, 블루투스 버전, 배터리, 엔터키 형태, 각인 위치, 케이블 재질, 구성품, PS2, 스텝스컬쳐, 윈도우 키 잠금, 세부 크기는 상세 스펙 또는 원본 스펙으로 보관합니다.
- **초보자 우선**: 다나와식 전체 스펙 필터를 그대로 노출하지 않고 구매 판단에 필요한 조건만 먼저 보여줍니다.

### Mouse Product Filter & Shell Reference Simplification
- **기본 필터 5개 원칙**: 마우스 제품 필터는 형태, 무게감, 연결 방식, 크기감, 가격대까지만 기본 노출하는 구조로 정리했습니다.
- **더보기 필터 분리**: 게이밍 성능, 버튼 수, 코팅/그립감, 스위치 성향, 배터리/충전은 선택형 더보기 필터로 분리합니다.
- **상세 스펙 분리**: 센서, DPI, IPS, 가속도, 폴링레이트, 블루투스 버전, 보증기간, 세부 크기값 등은 기본 필터가 아니라 상세 스펙 또는 원본 스펙으로 보관합니다.
- **쉘 체감 레퍼런스**: 유사 쉘 계열, 자주 비교되는 쉘, 쉘 체감 레퍼런스 정보를 `shellReferences`에 보관할 수 있습니다.
- **표현 원칙**: 법적/표현 리스크를 줄이기 위해 카피/표절성 표현 대신 손에 닿는 형태가 비슷하다는 반응, 비교 기준으로 삼기 좋음 같은 표현을 사용합니다.

### v0.3F - Visual Editing Workbench Ready (Current)
- **시각형 문구 수정 작업대**: Project99 Control Tower의 `/projects/project7/content`에서 SetupRadar 화면처럼 보이는 mock preview를 보며 문구를 클릭하고 수정안을 작성할 수 있습니다.
- **수동 반영 원칙 유지**: 작업대 수정안은 localStorage와 export 파일로만 관리되며, 실제 사이트 반영은 Codex/Gemini가 `src/content`의 `editor` 필드에 옮긴 뒤 Git push와 Cloudflare Pages 배포로 진행합니다.
- **실시간 DB 수정 없음**: Supabase/API/n8n 없이 정적 사이트 구조를 유지합니다. 실제 문구 수정은 yulxwell이 별도 루프에서 진행합니다.

### v0.3A - Control Tower Workbench Integration
- **JSON 작업대 도입**: Markdown 기반 검토를 넘어, Control Tower WebUI에서 읽을 수 있는 구조화된 JSON 작업대(`docs/content-copy-workbench.kr.json`)를 추가했습니다.
- **Project99 연동 설계**: Control Tower에서 SetupRadar의 문구를 섹션별로 필터링하고 수정안을 작성한 뒤 JSON으로 추출(Export)하는 흐름을 구축했습니다.
- **수동 반영 원칙 유지**: 실제 코드 수정은 추출된 JSON을 기반으로 Codex/Gemini가 수행하며, 사이트의 완전 정적 아키텍처와 `ai*` 필드 보존 원칙을 유지합니다.

### v0.2.8 - Finder Compact UX Hotfix
- **Finder compact layout 적용**: Mouse Finder와 Keyboard Finder의 큰 카드형 선택지를 compact chip 중심 UI로 줄였습니다.
- **첫 화면 정보 밀도 개선**: 데스크톱 기준 주요 선택 항목을 한 화면에서 빠르게 훑어볼 수 있도록 여백과 카드 높이를 줄였습니다.
- **Mouse Finder 불편함 질문 정리**: "현재 불편한 점"을 별도 질문에서 제거하고, 손목 피로/선 걸림/크기 부담 설명을 각 선택지 helper text에 녹였습니다.
- **메인 페이지 노출 낮춤**: Finder를 필수 흐름이 아닌 보조 CTA로 낮추고, 테스트 도구보다 크게 보이지 않도록 정리했습니다.
- **옵션 파일 유지**: Finder 문구와 선택지는 계속 `src/content/kr/finder/*Options.ts`에서 관리합니다.

### v0.2.7 - Finder UX Refactor
- **Finder 단일 페이지화**: Mouse Finder와 Keyboard Finder를 단계형 마법사에서 한 화면 필터형 UX로 단순화했습니다.
- **초보자 회피 선택지 강화**: 주요 선택 항목에 "상관없음", "잘 모르겠음"을 추가해 조건을 몰라도 추천 결과를 볼 수 있도록 했습니다.
- **Mouse Finder 질문 축소**: FPS/MOBA 등 장르 중심 질문을 제거하고 손 크기, 형태, 불편함, 무게, 연결 방식 중심으로 정리했습니다.
- **Keyboard Finder 시각화 정리**: 품질이 낮은 배열 다이어그램을 제거하고 텍스트 배지와 한 줄 설명 중심으로 대체했습니다.
- **Finder 옵션 분리**: 운영자가 문구와 선택지를 수정하기 쉽도록 `src/content/kr/finder/` 아래 옵션 config 파일로 분리했습니다.
- **소프트 매칭 유지**: 누락 조건은 무시하고 가능한 조건만 점수화해 참고용 추천 결과 3개를 표시합니다.

### v0.2.6 - Finder Logic Refinement
- **Mouse Finder 파지법 제거**: 초보자가 이해하기 어려운 팜/클로/핑거 그립 파지법 질문을 제거하고, 대신 "마우스 형태 선호(대칭/비대칭)" 질문을 도입하여 직관성을 높였습니다.
- **추천 로직 고도화**: 그립법 기준 필터링에서 `shapeType`(Symmetrical/Ergonomic) 기반 가산점 방식으로 로직을 전환하여 더 정확한 제품 추천을 제공합니다.
- **Keyboard Finder 레이아웃 시각화 강화**: 75%, 65%, 60% 등 구분이 어려운 미니 배열들을 CSS Grid 기반의 정교한 다이어그램으로 재구성하여 시각적 차이를 극대화했습니다.

### v0.2.5 - Detail Hotfix & UX Polish
- **Mouse Finder 개편**: 기존 3단계에서 6단계 정밀 마법사로 리뉴얼. 손 크기, 불편함(손목 통증), 무게, 연결 방식 등을 우선순위에 배치하여 초보자 대응 강화.
- **Keyboard Finder 시각화**: 배열 선택 단계에서 실제 키보드 크기를 직관적으로 알 수 있는 레이아웃 배지/아이콘 시스템 도입. 60% 배열 추가.
- **콘텐츠 아키텍처 안정화**: `BaseContent` 인터페이스 강화를 통해 제품/스위치 데이터의 타입 안전성 확보 및 브랜드 미지정 제품 예외 처리.

### v0.2.3 - Text Quality & Switch Database
- **초보자 중심 텍스트 개선**: 모든 가이드 및 진단 문구를 구매 판단을 돕는 '초보자 친화적' 문체로 리뉴얼.
- **키보드 스위치 사전 구축**: '아이스크림축', '말차축' 같은 감성 네이밍 축을 실제 체감 기준으로 분류하는 데이터 구조(`KeyboardSwitch`) 추가.
- **스위치 가이드 페이지 신설**: `/kr/switches` 경로를 통해 복잡한 스위치 정보를 한눈에 확인 가능.

### v0.2.1 - Design System Hotfix
- **테마 시스템 고도화**: 모든 테스트 및 가이드 컴포넌트가 CSS 변수(`--primary`, `--accent` 등)를 사용하도록 표준화.
- **UI 일관성 확보**: 하드코딩된 색상을 제거하고 라이트/다크 모드에 최적화된 전문적인 디자인 톤 적용.

## 📦 배포 가이드 (Cloudflare Pages)
본 프로젝트는 완전 정적 사이트(Static Site Generation)로 구성되어 있으며, **Cloudflare Pages** 배포를 기준으로 운영됩니다.

콘텐츠와 Finder 옵션은 브라우저에서 실시간으로 수정되는 구조가 아닙니다. 파일을 수정한 뒤 Git에 커밋/푸시하면 Cloudflare Pages 빌드가 실행되고 정적 산출물이 배포됩니다.

### Cloudflare Pages 설정
1. Cloudflare 대시보드에서 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git** 선택.
2. 빌드 설정:
   - **Framework preset**: `Next.js` 또는 `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

## 🛠 아키텍처 제약 사항 (Strict Restrictions)
- **No Database/API**: Supabase 포함 모든 외부 DB 및 서버 API 사용 없음.
- **No Dynamic Data**: 실시간 최저가 크롤링, 외부 상품 DB 연동 없음.
- **No User System**: 회원가입, 로그인, 개인 데이터 서버 저장 없음.
- **No Environment Variables**: 배포 시 별도의 환경 변수 설정이 필요하지 않음.

## 📝 배포 전 체크리스트
- [x] `npm run build` 오류 없이 완료 여부 (`out` 폴더 생성 확인)
- [x] 모든 테스트 페이지 하단에 Disclaimer(면책 문구) 포함 여부
- [x] 모바일 브라우저에서 전체화면 진입 및 색상 전환 정상 작동 확인
- [x] '시작하기' 등 주요 CTA 버튼의 시인성 확보
