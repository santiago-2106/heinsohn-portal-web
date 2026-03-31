import React, {ReactNode} from 'react' 

// utils/richText.ts
export const richText = {
  bold: (chunks: React.ReactNode) => (
    <span className="font-semibold text-text-title">
      {chunks}
    </span>
  ),
  red: (chunks: React.ReactNode) => (
    <span className="text-brand-accent ">
      {chunks}
    </span>
  ),
  br: () => <br />,
  dark: (chunks: React.ReactNode) => (
    <span className="text-[#414158]">
      {chunks}
    </span>
  ),
};