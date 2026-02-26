export type UiLanguage = 'en' | 'he' | 'ar'

export const toUiLanguage = (language: string): UiLanguage => {
  if (language === 'he' || language === 'ar') {
    return language
  }
  return 'en'
}

export const pickText = (
  language: string,
  messages: Record<UiLanguage, string>
): string => {
  return messages[toUiLanguage(language)]
}
