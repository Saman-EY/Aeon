import { Link, useLocation } from 'react-router'
import { languages, languageNames } from '../data/localized'
import { useSite } from '../lib/site-context'
import { localizedPath, rememberLanguage } from '../lib/routes'

export default function LanguageLinks() {
  const { lang, path, s } = useSite()
  const { search, hash } = useLocation()
  return (
    <div className="language-links" role="group" aria-label={s.language}>
      {languages.map((language) => (
        <Link
          key={language}
          to={`${localizedPath(language, path)}${search}${hash}`}
          lang={language}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
          onClick={() => rememberLanguage(language)}
          aria-current={lang === language ? 'true' : undefined}
        >
          {languageNames[language]}
        </Link>
      ))}
    </div>
  )
}
