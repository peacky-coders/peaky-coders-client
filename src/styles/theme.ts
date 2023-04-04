export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

export const theme = {
  colors: {
    onyx: '#32373B',
    space: '#4A5859',
    dogwood: '#F4D6CC',
    yellow: '#F4B860',
    shimmer: '#C83E4D',
  },

  // Source: https://getbootstrap.com/docs/4.0/layout/grid/
  media: {
    xl: E_MediaQuery.xl,
    lg: E_MediaQuery.lg,
    md: E_MediaQuery.md,
    sm: E_MediaQuery.sm,
  },

  // in px
  sizes: {
    header: { height: 56 },
    modal: { width: 640 },
    authForm: { width: 520, height: 800 },
    verificationForm: { width: 520, height: 460 },
    authCallbackForm: { width: 520, height: 460 },
    sidePanel: { width: 320 },
    window: 420,
    windowHeader: { height: 36 },
  },

  // in ms
  durations: {
    ms50: 50,
    ms100: 100,
    ms300: 300,
  },

  // z-index
  order: {
    hero: 10,
    content: 20,
    window: 100,
    sidePanelContent: 400,
    sidePanelOverlay: 299,
    header: 300,
    modalsWrap: 500,
    modalOverlay: 510,
    modalWindow: 520,
    sideMenuOverlay: 1000,
    sideMenuContent: 1010,
    sideMenuControl: 1020,
  },
}

export type Theme = typeof theme
