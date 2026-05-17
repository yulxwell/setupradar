# PROJECT7_WORK_LOG.md

SetupRadar project7 작업 채팅용 운영 로그입니다. 이 문서는 v0.1.1부터 v0.2.6까지의 작업 이력, 운영 원칙, 금지 사항, 그리고 다음 작업 후보를 한곳에 모아 이후 작업자가 같은 맥락에서 이어서 작업할 수 있도록 유지합니다.

## 현재 상태

- 현재 버전: `v0.2.6 - Finder Logic Refinement`
- 다음 후보 버전: `v0.2.7 - Finder UX Refactor`
- 프로젝트 성격: PC 하드웨어 진단 및 구매 가이드용 정적 웹사이트
- 주요 경로:
  - `/kr`
  - `/kr/tests`
  - `/kr/guides`
  - `/kr/finder/mouse-fit`
  - `/kr/finder/keyboard-fit`
  - `/kr/switches`
- 배포 기준: Cloudflare Pages 정적 배포, `npm run build`, 출력 디렉터리 `out`

## 작업 이력

### v0.1.1 - Initial Setup

- Next.js 기반 SetupRadar 초기 구조를 생성했다.
- 한국어 하드웨어 진단 사이트의 기본 화면, 테스트 페이지, 구매 가이드 페이지를 구성했다.
- 마우스, 키보드, 모니터 관련 테스트 컴포넌트와 공통 카드/헤더/푸터 컴포넌트를 추가했다.
- 초기 정적 배포 산출물과 기본 설정 파일을 포함했다.

### v0.2.0 - Gear Finders & Stability Fixes

- 한국어 경로를 `/ko`에서 `/kr` 중심으로 정리했다.
- Mouse Finder와 Keyboard Finder를 장비 찾기 기능으로 추가했다.
- 키보드 롤오버 테스트를 추가했다.
- 마우스/키보드 제품 데이터 파일을 도입했다.
- 홈, 가이드, 테스트, Finder 화면의 경로와 CTA를 정리했다.

### v0.2.1 - Design System Hotfix

- CSS 변수 기반 테마 시스템을 정리했다.
- 라이트/다크 모드 대응을 강화했다.
- 테스트, 가이드, Finder, 카드, 헤더, 푸터의 UI 톤을 통일했다.
- 하드코딩 색상을 줄이고 `ThemeProvider`를 추가했다.

### v0.2.3 - Text Quality & Switch Database

- 초보자 친화적인 문장으로 주요 가이드와 진단 문구를 개선했다.
- 키보드 스위치 데이터 구조와 스위치 데이터베이스를 추가했다.
- `/kr/switches` 페이지를 추가해 축 종류와 체감 차이를 설명했다.
- 마우스/키보드 제품 설명의 구매 판단 기준을 보강했다.

### v0.2.4 - Content Architecture Refactor

- `src/content/` 기반 콘텐츠 구조로 전환했다.
- 가이드, 제품, 스위치, 도구, 사이트 문구를 콘텐츠 파일로 분리했다.
- `ai` 초안과 `editor` 교정본을 구분할 수 있는 하이브리드 콘텐츠 운영 구조를 만들었다.
- `getContentDisplay` 유틸을 통해 운영자 교정본이 우선 표시되도록 했다.
- 페이지 컴포넌트가 하드코딩 데이터에 덜 의존하도록 정리했다.

### v0.2.5 - Detail Hotfix & UX Polish

- Mouse Finder를 더 세밀한 6단계 마법사로 확장했다.
- 손 크기, 현재 불편함, 무게, 연결 방식, 용도, 형태 선호를 질문하도록 구성했다.
- Keyboard Finder의 배열 선택 단계에 레이아웃 배지/시각화를 추가했다.
- 60% 배열을 추가했다.
- 제품/스위치 데이터의 타입 안정성과 예외 처리를 보강했다.

### v0.2.6 - Finder Logic Refinement

- Mouse Finder에서 팜/클로/핑거 같은 파지법 질문을 제거했다.
- 마우스 형태 선호를 대칭형/오른손용 비대칭형/잘 모르겠음으로 바꾸었다.
- `shapeType` 기반 추천 로직을 추가했다.
- Keyboard Finder의 배열 그림을 CSS Grid 기반으로 재구성했다.
- 콘텐츠 편집 가이드에 형태 중심 설명 원칙을 추가했다.

## v0.2.7 문제 정의

이번 작업의 목표는 새 기능 추가가 아니라 Finder UX를 단순하고 수정 가능한 구조로 바꾸는 것이다.

현재 문제:

- Gemini가 구현한 Finder는 기능은 많지만 실제 사용자 입장에서는 무겁다.
- Mouse Finder가 단계형 마법사처럼 구성되어 한 항목을 고르고 다음으로 넘어가는 흐름이 답답하다.
- 초보자용 사이트인데 질문이 많고, "상관없음/잘 모르겠음" 선택지가 부족하다.
- 마우스에서 FPS/MOBA 같은 장르 구분은 구매 판단에 비해 과하게 강조되어 있다.
- 파지법은 이미 제거했지만 전체 Finder UX가 여전히 무겁다.
- Keyboard Finder의 배열 그림은 품질이 낮아 그대로 쓰기 어렵다.
- Finder 구현이 앞으로 운영자가 문구와 기준을 수정하기 쉽게 정리되어야 한다.

## v0.2.7 방향

### Finder UX 공통 방향

- 단계형 마법사보다 한 화면에서 빠르게 고르는 구조를 우선 검토한다.
- 질문 수를 줄이고, 구매 판단에 직접 연결되는 기준만 남긴다.
- "상관없음", "잘 모르겠음", "처음 사요" 같은 초보자 회피 선택지를 기본 옵션으로 둔다.
- 결과가 0개가 되기 쉬운 하드 필터보다 점수/가산점 방식의 소프트 매칭을 우선한다.
- 사용자가 모든 질문에 답하지 않아도 결과를 볼 수 있어야 한다.
- Finder 문구는 전문 용어 설명보다 선택 부담을 줄이는 방향으로 쓴다.

### Mouse Finder 후보

- 장르 중심 질문은 축소하거나 제거한다.
- FPS/MOBA/RPG 같은 세부 장르보다 다음 기준을 우선한다.
  - 손 크기 또는 현재 마우스가 크다/작다
  - 무게 선호 또는 상관없음
  - 유선/무선 또는 상관없음
  - 손목 편안함 필요 여부
  - 형태 선호 또는 잘 모르겠음
- "현재 불편함"은 선택형 체크리스트 또는 선택 가능한 태그로 단순화한다.
- 결과 화면은 "왜 추천됐는지"를 짧게 보여준다.

### Keyboard Finder 후보

- 배열 그림은 임시 품질로 유지하지 말고, 새 구현 전까지 과하게 믿게 만들지 않는다.
- 배열 선택은 그림 중심보다 "숫자패드 필요", "책상 공간", "방향키/F열 필요" 같은 실제 판단 기준으로 바꾼다.
- 스위치 질문에는 "잘 모르겠음/조용한 편/타건감 있음/소리 큰 편" 같은 초보자 언어를 우선한다.
- 배열 시각화는 향후 개선 시 실제 키 배치의 정확성보다 선택 판단에 도움이 되는 차이를 표현해야 한다.

## 운영 원칙

- SetupRadar는 초보자를 위한 구매 판단 도구다.
- 설명은 객관적이고 과장 없이 작성한다.
- "최고", "무조건 추천", "완벽" 같은 단정형 문구를 피한다.
- 전문 용어는 필요한 경우에만 쓰고, 바로 옆에 쉬운 설명을 붙인다.
- 제품 데이터는 운영자가 수정하기 쉬운 구조를 유지한다.
- `src/content/`의 `ai` 필드는 초안으로 보고, 최종 교정은 `editor` 필드에서 처리한다.
- 외부 API, 실시간 가격, 크롤링, 사용자 계정 없이 정적 사이트로 운영한다.
- 변경 범위가 작은 작업은 관련 파일만 수정한다.
- 문서 변경만 요청된 작업에서는 코드, 데이터, 스타일, 빌드 산출물을 수정하지 않는다.

## 금지 사항

- 새 기능 추가 금지.
- 외부 DB, Supabase, 서버 API, 로그인, 회원가입 추가 금지.
- 실시간 최저가, 상품 크롤링, 외부 상품 DB 연동 금지.
- 환경 변수 의존 기능 추가 금지.
- Finder를 더 복잡한 설문으로 확장 금지.
- Mouse Finder에 파지법 질문 재도입 금지.
- 마우스 구매 판단에서 FPS/MOBA 같은 장르 구분을 과도하게 강조 금지.
- Keyboard Finder에 품질 낮은 배열 그림을 핵심 판단 요소처럼 노출 금지.
- 운영자가 수정하기 어려운 하드코딩 문구/기준을 늘리는 작업 금지.
- 문서 작업 요청 시 코드 변경 금지.

## 다음 작업 후보

1. v0.2.7 Finder UX Refactor 설계 문서 작성
   - Mouse Finder와 Keyboard Finder의 질문 축소안을 문서로 먼저 확정한다.
   - 단계형 마법사 유지/폐지 여부를 결정한다.

2. Mouse Finder 질문 구조 단순화
   - 세부 장르 질문을 줄인다.
   - "상관없음/잘 모르겠음" 선택지를 모든 부담 큰 질문에 추가한다.
   - 결과 0개 방지를 위해 소프트 매칭 기준을 정리한다.

3. Keyboard Finder 판단 기준 재정리
   - 배열 그림 중심에서 실사용 질문 중심으로 이동한다.
   - 스위치 선택지를 초보자 언어로 바꾼다.

4. Finder 데이터/문구 분리 검토
   - 질문 문구와 선택지 텍스트를 `src/content/kr/siteCopy.ts` 또는 별도 콘텐츠 파일로 옮길지 검토한다.
   - 단, 구조 변경은 v0.2.7 구현 범위가 확정된 뒤 진행한다.

5. README와 콘텐츠 편집 가이드 동기화
   - v0.2.7 구현 후 README의 현재 버전과 업데이트 내역을 갱신한다.
   - Finder 운영 원칙을 `docs/content-editing-guide.md`에 반영할지 검토한다.

## 이번 문서 작업 기록

- `PROJECT7_WORK_LOG.md`를 생성했다.
- v0.1.1부터 v0.2.6까지의 이력을 README와 Git 커밋 로그 기준으로 정리했다.
- v0.2.7 Finder UX Refactor의 문제 정의, 방향, 금지 사항, 다음 작업 후보를 문서화했다.
- 코드 변경은 수행하지 않았다.
- 문서 파일만 추가했다.
- 문서만 변경했으므로 `npm run lint`와 `npm run build`는 생략 가능하다.

## v0.2.7 구현 기록

- Mouse Finder를 단계형 마법사에서 단일 페이지 필터형 구조로 변경했다.
- Mouse Finder에서 FPS/MOBA/RPG 등 장르 질문과 목적 단계, 진행바를 제거했다.
- Mouse Finder 조건을 손 크기, 마우스 형태, 현재 불편한 점, 무게 선호, 연결 방식으로 정리했다.
- Keyboard Finder를 단일 페이지 필터형 구조로 변경했다.
- Keyboard Finder의 CSS 배열 다이어그램을 제거하고 텍스트 배지와 설명 중심으로 대체했다.
- Finder 선택지 문구를 `src/content/kr/finder/mouseFinderOptions.ts`, `src/content/kr/finder/keyboardFinderOptions.ts`로 분리했다.
- 추천 로직은 하드 필터보다 가능한 조건만 점수화하는 방식으로 단순화했다.
- README와 콘텐츠 편집 가이드에 v0.2.7 변경 내용, Finder 옵션 수정 위치, git push 후 Cloudflare 배포 흐름을 반영했다.
- `npm run lint`와 `npm run build`를 통과했다.

## v0.2.8 구현 기록

- Mouse Finder와 Keyboard Finder의 큰 선택 카드 UI를 compact chip 중심으로 줄였다.
- Finder 페이지의 여백, 제목 크기, 선택지 높이를 줄여 데스크톱 첫 화면에서 주요 항목을 더 빠르게 훑을 수 있게 했다.
- Mouse Finder의 "현재 불편한 점" 질문을 제거하고, 손목 피로/선 걸림/크기 부담 설명을 형태, 무게, 연결 방식 선택지 설명으로 옮겼다.
- Mouse Finder 추천 로직에서 불편함 전용 점수 조건을 제거하고 손 크기, 형태, 무게, 연결 방식 점수화는 유지했다.
- Keyboard Finder는 배열, 스위치 느낌, 소음 민감도, 연결 방식, OS 항목을 compact layout으로 유지했다.
- 메인 페이지의 Finder 섹션을 테스트 도구보다 작고 조용한 보조 CTA로 낮췄다.
- Finder 옵션 파일은 `src/content/kr/finder/mouseFinderOptions.ts`, `src/content/kr/finder/keyboardFinderOptions.ts` 구조를 유지했다.

## v0.2.9 Content Editing Workbench 기록

- `docs/content-copy-workbench.kr.md`를 생성했다.
- 이번 작업은 공개 사이트 기능 추가가 아니라, yulxwell이 문구를 검토하고 수정 지시를 남길 수 있는 편집 작업대 문서화 작업이다.
- 메인 페이지, Mouse Finder, Keyboard Finder, 제품 데이터, 스위치 사전, 테스트 도구, 가이드 카드의 주요 노출 문구를 섹션별로 정리했다.
- 각 문구에 현재 문구, 수정 위치, 운영자 수정안, 메모 칸을 제공했다.
- 제품/스위치/가이드 데이터는 나중에 `ai*` 필드를 덮어쓰지 않고 `editor*` 필드로 반영하는 흐름을 명시했다.
- `docs/content-editing-guide.md`에 Copy Editing Workbench 사용 방법과 Codex/Gemini 반영 흐름을 추가했다.
- 사이트 기능, 라우팅, 디자인, 추천 로직은 변경하지 않았다.
- 문서만 변경했으므로 `npm run lint`와 `npm run build`는 생략 가능하다.

## Project7 Control Tower Content Editor 단순화 기록

- Project99 Control Tower의 `/projects/project7/content` 화면을 복잡한 상태 관리 도구가 아니라 yulxwell용 단순 문구 수정 작업대로 정리했다.
- priority 필터와 priority badge를 UI에서 제거했다.
- 기존 `needs_edit`, `edited`, `approved`, `skipped` 상태 드롭다운을 제거하고, `operator_draft` 존재 여부만으로 수정됨/미수정을 판단하도록 단순화했다.
- 상단 필터는 검색, 섹션 선택, 보기 옵션(전체/수정한 항목만/미수정 항목만)만 유지했다.
- 카드 버튼은 수정/되돌리기 중심으로 정리했다.
- 되돌리기는 해당 항목의 `operator_draft`와 `memo`를 비우며 localStorage에도 반영된다.
- memo는 보조 입력칸으로 유지하되 시각적 강조를 줄였다.
- localStorage 기반 로컬 저장과 JSON Export/Copy 구조는 유지했다.
- 전체 Export/Copy와 수정한 항목만 Export/Copy를 제공한다.
- Project7 공개 사이트의 `src/content` 실제 문구는 수정하지 않았다.
- Supabase, SQL, n8n, DB write, Control Tower 외부 연동은 추가하지 않았다.

## Project7 Control Tower Copy Workbench UX 단순화 기록

- Project99 Control Tower의 `/projects/project7/content` 화면을 개발자용 JSON 관리 도구 느낌에서 yulxwell용 문구 수정 작업대 느낌으로 한 번 더 정리했다.
- 페이지 제목을 "Project7 문구 수정 작업대"로 변경했다.
- 상단에 3단계 안내를 추가했다.
  - 고칠 문구 찾기
  - 내가 바꿀 문구 작성
  - 수정안 복사 후 AI에게 전달
- UI에서 `operator_draft`, `memo`, `Export JSON`, `Copy JSON`, `localStorage`, `payload` 같은 개발자 용어 노출을 줄였다.
- `operator_draft`는 "내가 바꿀 문구", `memo`는 "메모", `localStorage`는 "브라우저 임시 저장"으로 안내했다.
- 복사/저장 버튼은 "내가 고친 문구만 복사", "내가 고친 문구만 파일로 저장", "전체 문구 복사", "전체 문구 파일로 저장"으로 변경했다.
- 카드 구조를 문구 위치/섹션, 현재 문구, 내가 바꿀 문구, 메모, 수정/되돌리기 버튼 중심으로 정리했다.
- 파일 경로와 field path는 기본 노출을 줄이고 "반영 위치 보기" 접기 영역으로 이동했다.
- 실제 Project7 `src/content` 자동 반영은 하지 않았다.
- Supabase/API/DB/n8n 연동은 추가하지 않았다.
- 장기 후보로 제품 비교 기능, CPU/메인보드/벤치마크 영역을 남겼지만 현재 우선순위는 문구 품질, 제품 데이터 품질, 편집 흐름 안정화로 유지한다.

## Project7 Control Tower v0.3B Preview Editing Workbench 기록

- Project99 Control Tower의 `/projects/project7/content` 문구 수정 작업대에 미리보기 영역을 추가했다.
- 문구 목록, 선택한 문구 편집 영역, 미리보기 영역을 나눠 yulxwell이 현재 문구와 수정안을 한 화면에서 비교할 수 있게 했다.
- "내가 바꿀 문구"를 입력하면 작업대 내부 미리보기에 즉시 반영된다.
- 미리보기는 전체 사이트 iframe이 아니라 문구 종류별 mock preview card이며, 실제 SetupRadar 사이트 반영이 아니다.
- 첫 화면, 카드, Finder 선택지, 제품 문구, 스위치/축, 일반 문구 형태의 미리보기를 제공한다.
- localStorage 기반 브라우저 임시 저장과 수정안 복사/파일 저장 구조는 유지했다.
- 실제 반영은 export한 수정안을 Codex/Gemini가 `src/content`의 `editor` 필드에 옮긴 뒤 Git push와 Cloudflare Pages 배포로 진행한다.
- Project7 공개 사이트의 `src/content` 실제 문구는 수정하지 않았다.
- Supabase/API/DB/n8n 연동, 실제 사이트 자동 반영, 공개 사이트 라우팅 변경은 추가하지 않았다.

## Project7 Control Tower v0.3C Live Preview Editing Workbench 기록

- Project99 Control Tower의 `/projects/project7/content` 오른쪽 패널을 "작업대 미리보기"와 "실제 사이트 보기"로 구분했다.
- 작업대 미리보기는 기존 mock preview card를 유지하며, "내가 바꿀 문구" 입력값을 즉시 반영한다.
- 실제 사이트 보기는 `https://setupradar.pages.dev`의 현재 배포 화면을 iframe으로 작게 표시한다.
- 문구 항목의 section, id, file path, field path를 기준으로 `/kr`, 테스트 도구, Mouse Finder, Keyboard Finder, 스위치/축, 가이드 페이지 URL을 추정한다.
- 실제 사이트 보기에는 "새 창으로 크게 보기" 링크를 제공한다.
- iframe preview는 현재 배포 화면 확인용이며, 수정안이 즉시 반영되는 화면이 아니다.
- 사용자 화면의 디자인 용어는 "첫 화면" 기준 표현으로 정리했다.
- 실제 반영은 여전히 export한 수정안을 Codex/Gemini가 `src/content`의 `editor` 필드에 반영한 뒤 Git push와 Cloudflare Pages 배포로 진행한다.
- Project7 공개 사이트의 `src/content` 실제 문구는 수정하지 않았다.
- Supabase/API/DB/n8n 연동, iframe DOM 조작, postMessage 연동, 실제 사이트 자동 반영은 추가하지 않았다.

## Project7 Control Tower v0.3D Sentence Editing Workbench 기록

- Project7 문구 수정 작업대의 기본 편집 단위를 단어/phrase가 아니라 전체 문장으로 정리했다.
- "객관적으로"처럼 일부 단어만 보이는 항목은 사용자에게 혼란을 줄 수 있어, 화면에서는 전체 문장 맥락을 먼저 보여주도록 했다.
- 편집 영역을 "어디에 쓰이는 문구인가요?", "현재 문장", "내가 바꿀 문장", "메모", "반영 위치 보기" 흐름으로 바꿨다.
- 작업대 미리보기는 부분 치환 로직을 만들지 않고, 내가 바꿀 문장이 있으면 그 문장 전체를 그대로 표시한다.
- 기존 강조 단어 같은 부분 문구 정보는 기본 화면에서 크게 강조하지 않고, 필요한 경우 "반영 위치 보기" 안의 보조 정보로만 표시한다.
- 실제 Project7 `src/content` 문구는 수정하지 않았다.
- localStorage 기반 브라우저 임시 저장과 수정안 복사/파일 저장 구조는 유지했다.

## Project7 Control Tower v0.3E Grouped Sentence Workbench 기록

- Project99 Control Tower의 `/projects/project7/content` 왼쪽 문장 목록을 단순 나열형에서 카테고리/폴더형 구조로 변경했다.
- 큰 분류는 첫 화면, 테스트 도구, Finder, 제품 문구, 스위치·축 사전, 가이드, 공통·푸터, 기타로 나눴다.
- 각 큰 분류 heading에 현재 필터 기준 전체 항목 수와 고친 항목 수를 표시한다.
- 첫 화면, 테스트 도구, Finder는 기본 펼침 상태로 두고, 나머지는 사용자가 열고 닫을 수 있게 했다.
- 검색어, 섹션 필터, 보기 옵션이 적용되면 해당 조건에 맞는 카테고리 결과가 보이도록 했다.
- 문장 항목에는 위치 라벨, 현재 문장 앞부분, 고침/아직 안 고침 상태만 간결하게 표시한다.
- file path, field path, content id는 기존처럼 가운데 편집 영역의 "반영 위치 보기" 안에서만 확인한다.
- 이 변경은 문구 위치를 더 쉽게 찾기 위한 Control Tower 내부 UI 개선이며, 실제 Project7 콘텐츠를 자동 수정하지 않는다.
- localStorage 기반 브라우저 임시 저장과 수정안 복사/파일 저장 구조는 유지했다.

## Project7 Control Tower v0.3F Visual Page Editing Workbench 기록

- Project99 Control Tower의 `/projects/project7/content` 기본 UI를 목록형 편집기에서 시각형 페이지 편집기로 전환했다.
- 사용자는 첫 화면, 테스트 도구, Finder, 스위치·축, 가이드, 메뉴·푸터 탭을 선택하고, 가운데 mock page preview에서 문구를 클릭해 수정 대상을 고른다.
- 클릭한 문구는 오른쪽 수정 패널에 "어디에 쓰이는 문구인가요?", "현재 문장", "내가 바꿀 문장", "메모", "반영 위치 보기" 흐름으로 표시된다.
- 내가 바꿀 문장을 입력하면 가운데 mock preview에 즉시 반영된다.
- 기존 목록형 작업대는 삭제하지 않고 "목록으로 보기 / 고급 보기" 접기 영역으로 낮췄다.
- 이 preview는 Control Tower 내부 mock preview이며 실제 SetupRadar iframe DOM을 조작하지 않는다.
- 실제 Project7 `src/content` 자동 수정은 하지 않았다.
- localStorage 기반 브라우저 임시 저장과 수정안 복사/파일 저장 구조는 유지했다.

## Project99 / Project7 안정화 체크포인트 기록

- 이번 체크포인트에서는 새 기능을 추가하지 않고 Project7 SetupRadar와 Project99 Control Tower의 변경사항을 검수했다.
- Project7은 `/kr` 기준 라우팅, `/ko` 경로, Finder compact UX, `src/content` 기반 ai/editor 구조를 유지한다.
- Project7 문구 수정 작업대는 v0.3F Visual Editing Workbench 상태까지 구현되었고, 작업대 UI 개선은 여기서 잠근다.
- 문구 수정은 yulxwell이 다음 루프에서 직접 진행한다.
- Control Tower 작업대 수정안은 localStorage에 임시 저장하고 export 후 Codex/Gemini가 `editor` 필드에 반영하는 방식이다.
- 실시간 DB 수정, Supabase/API/n8n 연동, Project7 공개 사이트 자동 수정은 없다.

## GitHub Repository 이름 정리 기록

- Project7 SetupRadar의 GitHub repo 이름을 `setupradar`에서 `project7_setupradar`로 정리했다.
- Project7과 Project99 Control Tower를 구분하기 쉽도록 Project 번호가 드러나는 이름을 기준으로 기록한다.
- 이 기록은 repo 명칭 정리이며, 공개 사이트 라우팅(`/kr`)이나 Cloudflare Pages 배포 URL 변경을 의미하지 않는다.

## Keyboard Product Filter Simplification 설계 기록

- 키보드 제품 데이터 확장을 준비하면서 다나와식 전체 필터를 그대로 쓰지 않는 원칙을 세웠다.
- 키보드 필터는 기본 5개, 더보기 필터, 상세 스펙/원본 스펙으로 나눈다.
- 기본 필터는 배열, 연결 방식, 키감/축 느낌, 소음, 가격대만 둔다.
- 게이밍 기능, 멀티기기, 키캡, 하우징, 백라이트, 무게감은 더보기 필터로 분리한다.
- 키압 세부값, 매크로, 응답속도, 블루투스 버전, 배터리, 엔터키 형태, 각인 위치, 케이블 재질, 구성품, PS2, 스텝스컬쳐, 윈도우 키 잠금, 세부 크기는 상세 스펙 또는 원본 스펙으로 보관한다.
- `KeyboardContent` 타입에 `basicFilters`, `advancedFilters`, `detailSpecs`, `rawSpecs`를 선택 필드로 추가했다.
- 기존 `layout`, `switchType`, `priceRange`, `features` 필드는 Keyboard Finder 호환을 위해 유지했다.
- 제품 대량 추가, UI 대규모 변경, Supabase/API/DB 추가는 하지 않았다.
