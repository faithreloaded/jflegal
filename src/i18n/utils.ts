import type { Locale } from './index';

export function getLangFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const segments = pathname.split('/');
  const lang = segments[1] as Locale;
  
  if (lang && ['es', 'en', 'ca'].includes(lang)) {
    return lang;
  }
  
  return 'es'; // default
}

export function getPathWithoutLang(pathname: string): string {
  const segments = pathname.split('/');
  if (segments[1] && ['es', 'en', 'ca'].includes(segments[1])) {
    return '/' + segments.slice(2).join('/');
  }
  return pathname;
}
