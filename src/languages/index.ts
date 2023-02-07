import RU from './ru.json'

import { E_Locale } from 'models/app'

const translations = { [E_Locale.ru]: RU }

export const t = (key: string | false) => {
  if (key === false) return
  const language = E_Locale.ru
  const keys = key.split('.')
  return getNestedTranslation(language, keys) || key
}

const getNestedTranslation = (language: E_Locale, keys: string[]) => {
  return keys.reduce((obj: any, key: string) => {
    return obj?.[key]
  }, translations[language])
}
