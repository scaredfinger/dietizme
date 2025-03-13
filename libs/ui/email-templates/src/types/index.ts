import { TemplateDelegate } from 'handlebars'

interface TranslationsByLanguage<Translations extends Record<string, string>> {
  [language: string]: Translations
}

export class RendererImpl<Data, Translations extends Record<string, string>> {
  constructor(
    private readonly i18n: TranslationsByLanguage<Translations>,
    private readonly bodyTemplate: TemplateDelegate<Data>,
    private readonly subjectTemplate: TemplateDelegate<Data>,
  ) {}

  render(data: Data, language = 'en'): { body: string, subject: string } {

    const dataWithTranslations = {
      ...data,
      i18n: this.i18n[language],
    }

    const body = this.bodyTemplate(dataWithTranslations)
    const subject = this.subjectTemplate(dataWithTranslations)

    return { body, subject }
  }
}