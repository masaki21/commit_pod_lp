import posthog from 'posthog-js';

import type { Language } from './translations';
import type { Goal } from './types';

const WEB_APP_URL = 'https://commit-pod.vercel.app/';

export const posthogConfig = {
  apiHost: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  apiKey: import.meta.env.VITE_PUBLIC_POSTHOG_KEY,
  options: {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    defaults: '2026-01-30',
    capture_pageview: true,
    capture_pageleave: true,
  },
} as const;

export const hasPostHogKey = Boolean(posthogConfig.apiKey);

type StartAppSource =
  | 'header'
  | 'hero'
  | 'quick_calculator'
  | 'store_section'
  | 'mobile_floating_cta'
  | 'footer';

const capture = (event: string, properties?: Record<string, unknown>) => {
  if (!hasPostHogKey) {
    return;
  }

  posthog.capture(event, properties);
};

export const getWebAppUrl = () => WEB_APP_URL;

export const trackHowToOpened = (lang: Language, source: 'header' | 'hero') => {
  capture('lp_how_to_opened', { lang, source });
};

export const trackLanguageChanged = (from: Language, to: Language) => {
  if (from === to) {
    return;
  }

  capture('lp_language_changed', { from, to });
};

export const trackCalcStepAdvanced = (lang: Language) => {
  capture('lp_calc_step_advanced', { lang, from_step: 'body_input', to_step: 'goal_selection' });
};

export const trackCalcCompleted = (lang: Language, goal: Goal) => {
  capture('lp_calc_completed', { lang, goal });
};

export const trackStartAppClicked = (lang: Language, source: StartAppSource) => {
  capture('lp_start_app_clicked', { lang, source, destination: WEB_APP_URL });
};
