export const translations = {
  ko: {
    common: {
      title: "SetupRadar",
      description: "PC 주변기기를 사기 전/산 후에 바로 테스트하고, 초보자가 스펙을 이해하도록 돕는 사이트.",
      heroTitle: "내 장비, 사기 전에도 사고 난 후에도 체크하세요.",
      heroSubtitle: "마우스·키보드·모니터를 테스트하고, 스펙을 쉽게 이해하는 PC 셋업 진단 도구.",
      disclaimer: "이 테스트는 참고용이며, 제품 불량 확정이나 교환을 보장하지 않습니다.",
      comingSoon: "준비 중",
      testNow: "테스트하기",
      readMore: "더 보기",
      guides: "가이드",
      tests: "테스트 도구",
      footerDesc: "SetupRadar - PC 셋업 진단 플랫폼",
    },
    tests: {
      deadPixel: {
        title: "불량화소 테스트",
        desc: "모니터 구매 직후 불량화소를 확인하세요.",
        guide: "화면을 깨끗하게 닦고, 전체화면으로 실행한 뒤 색상을 하나씩 바꿔가며 점처럼 보이는 픽셀을 확인하세요.",
        caution: "이 테스트는 사용자가 눈으로 직접 확인하는 참고용 테스트입니다. 교환 가능 여부는 제조사 정책에 따라 다릅니다.",
      },
      backlightBleed: {
        title: "빛샘/IPS Glow 테스트",
        desc: "어두운 화면에서 빛샘 현상을 확인하세요.",
        guide: "밝기를 높이고 어두운 방에서 확인하세요. 모서리와 가장자리를 중점적으로 체크하세요.",
        caution: "빛샘과 IPS Glow는 패널 특성, 밝기, 시야각에 따라 다르게 보일 수 있습니다.",
      },
      doubleClick: {
        title: "마우스 더블클릭 테스트",
        desc: "한 번 클릭했는데 두 번 입력되는 증상을 확인하세요.",
        guide: "테스트 영역을 클릭하여 더블클릭 의심 증상을 확인하세요.",
        caution: "이 테스트는 의심 증상을 확인하는 참고용이며, 공식 진단 도구는 아닙니다.",
      },
      cps: {
        title: "CPS 테스트",
        desc: "초당 클릭 속도를 측정하세요.",
        guide: "제한 시간 내에 최대한 빠르게 클릭하세요.",
        caution: "기록은 브라우저 로컬에만 저장됩니다.",
      },
      pollingRate: {
        title: "폴링레이트 테스트",
        desc: "마우스 폴링레이트를 참고용으로 측정하세요.",
        guide: "영역 안에서 마우스를 빠르게 움직여 Hz를 측정하세요.",
        caution: "브라우저 기반 측정은 환경에 따라 오차가 발생할 수 있습니다. 8K는 전용 수신기 연결이 필요합니다.",
      }
    },
    guides: {
      gamingMouse: {
        title: "게이밍 마우스 vs 일반 마우스",
        desc: "게이밍 마우스가 진짜 다른 점은 무엇일까요?",
      },
      polling8k: {
        title: "8K 폴링레이트의 진실",
        desc: "8,000Hz 폴링레이트, 내게 정말 필요할까?",
      },
      deadPixelPolicy: {
        title: "불량화소와 무결점 정책",
        desc: "무결점 모니터, 불량화소 한 개라도 있으면 교환될까?",
      },
      ipsGlow: {
        title: "빛샘 vs IPS Glow",
        desc: "불량인 빛샘과 정상인 IPS Glow 구분하는 법.",
      },
      aluminumKeyboard: {
        title: "풀알루미늄 키보드 입문",
        desc: "묵직한 타건감의 끝판왕, 풀알루 키보드의 장단점.",
      }
    }
  }
};

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = "ko";
