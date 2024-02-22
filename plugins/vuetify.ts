import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { zhHant, en } from 'vuetify/locale';
import 'vuetify/styles';
import type { Plugin } from 'nuxt/app';
import { Settings } from 'luxon';
import type { ThemeDefinition } from 'vuetify';

const theme: ThemeDefinition = {
  dark: false,
  variables: {
    'theme-overlay-multiplier': 1,
    'activated-opacity': 0,
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ssr: false,
    components: { ...components },
    directives,
    theme: { defaultTheme: 'theme', themes: { theme } },
    locale: {
      locale: 'zhHant',
      fallback: 'en',
      messages: { zhHant, en },
    },
  });
  Settings.defaultZone = 'Asia/Taipei';
  nuxtApp.vueApp.use(vuetify);
}) as Plugin;
