import React, { FC, useState } from 'react'

import { SocialsList, Label, Input, Textarea, ButtonPrimary } from '../../atoms'
import { useTranslation } from '@otiuming/ui-i18n'

export interface SendOptions {
  name: string
  email: string
  message: string
}

interface Props {
  className?: string
  address?: string
  email?: string
  phone?: string
  onSent: (o: SendOptions) => Promise<unknown>
}

export const ContactForm: FC<Props> = ({
  className = '',
  address = '',
  email = '',
  phone = '',
  onSent,
}) => {
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerMessage, setMessage] = useState('')

  const { t } = useTranslation()

  const info = [
    {
      title: `🗺 ${t('fields.address.title').toUpperCase()}`,
      desc: address,
    },
    {
      title: `💌 ${t('fields.email.title').toUpperCase()}`,
      desc: email,
    },
    {
      title: `☎ ${t('fields.phone.title').toUpperCase()}`,
      desc: phone,
    },
  ].filter((i) => !!i.desc)

  function handleClick() {
    onSent({
      email: customerEmail,
      name: customerName,
      message: customerMessage,
    }).then(() => {
      setCustomerName('')
      setCustomerEmail('')
      setMessage('')
    })
  }

  return (
    <div
      className={`nc-PageContact overflow-hidden relative ${className}`}
      data-nc-id="PageContact"
    >
      <div className="mb-6 lg:mb-12">
        <h2 className="my-6 sm:my-12 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          {t('sections.contact.title')}
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              {/* <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  <span role="img" aria-label="socials">🌏</span> SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div> */}
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>{t('fields.full-name.title')}</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                    value={customerName}
                    onChange={(v) => setCustomerName(v.currentTarget.value)}
                  />
                </label>
                <label className="block">
                  <Label>{t('fields.email.title')}</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    value={customerEmail}
                    onChange={(v) => setCustomerEmail(v.currentTarget.value)}
                  />
                </label>
                <label className="block">
                  <Label>{t('fields.phone.title')}</Label>

                  <Textarea
                    className="mt-1"
                    rows={6}
                    value={customerMessage}
                    onChange={(v) => setMessage(v.currentTarget.value)}
                  />
                </label>
                <div>
                  <ButtonPrimary onClick={handleClick} type='button'>
                    {t('actions.send-message.title')}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      {/* <div className="container">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="Pagecontact_" />
        </div>
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div> */}
    </div>
  )
}
