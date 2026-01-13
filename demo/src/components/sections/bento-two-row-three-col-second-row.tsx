import { Eyebrow } from '@/components/elements/eyebrow'
import { Subheading } from '@/components/elements/subheading'
import Image from 'next/image'

interface BentoCard {
  eyebrow: string
  headline: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

interface BentoTwoRowThreeColSecondRowProps {
  id?: string
  eyebrow?: string
  headline?: string
  cards?: [BentoCard, BentoCard, BentoCard, BentoCard, BentoCard]
}

export default function BentoTwoRowThreeColSecondRow({
  id,
  eyebrow = 'Weitere Features',
  headline = 'Und das ist erst der Anfang.',
  cards = [
    {
      eyebrow: 'One-Click PDF-Export',
      headline: 'Mit einem Klick bereit',
      description:
        'Exportiere Buchungsbestätigungen und Einsatzpläne jederzeit als professionelles PDF. Spart Zeit und vermeidet Übertragungsfehler.',
      image: {
        src: 'https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/Bildschirmfoto%202026-01-12%20um%2023.03.15.png',
        alt: 'One-Click PDF-Export',
        width: 800,
        height: 320,
      },
    },
    {
      eyebrow: 'Übersichtliche Änderungshistorie',
      headline: 'Alles transparent nachvollziehbar',
      description:
        'Jede Anpassung wird automatisch dokumentiert. Sieh jederzeit, was geändert wurde, wann es passiert ist und wer verantwortlich war.',
      image: {
        src: 'https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/Bildschirmfoto%202026-01-12%20um%2023.04.03.png',
        alt: 'Dienstplanung',
        width: 800,
        height: 320,
      },
    },
    {
      eyebrow: 'Mitarbeiter einladen & Berechtigungen',
      headline: 'Einfach starten, sicher zusammenarbeiten',
      description:
        'Lade Mitarbeiter:innen mit wenigen Klicks ein und steuere präzise, wer welche Inhalte sehen oder bearbeiten darf. Die intuitive Bedienung macht Schulungen überflüssig.',
      image: {
        src: 'https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/nutzer-einladen-bottom-space.png',
        alt: 'Verfügbarkeit',
        width: 533,
        height: 320,
      },
    },
    {
      eyebrow: 'Kalendersynchronisation',
      headline: 'Automatisch synchronisiert',
      description:
        'Einsätze werden nahtlos mit Apple Kalender, Google Calendar, Outlook und weiteren Systemen abgeglichen. Änderungen erscheinen in Echtzeit.',
      image: {
        src: 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png',
        alt: 'Kalenderintegration',
        width: 533,
        height: 320,
      },
    },
    {
      eyebrow: 'Benachrichtigungen',
      headline: 'Alle bleiben informiert',
      description:
        'Automatische E-Mail-Benachrichtigungen informieren über neue Einsätze oder Änderungen – zuverlässig und ohne manuelles Nachfassen.',
      image: {
        src: 'https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png',
        alt: 'Benachrichtigungen',
        width: 533,
        height: 320,
      },
    },
  ],
}: BentoTwoRowThreeColSecondRowProps) {
  return (
    <div id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Eyebrow className="mb-4 text-base/7">{eyebrow}</Eyebrow>
        <Subheading className="text-mist-950 dark:text-white">{headline}</Subheading>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="relative z-10 h-full rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-mist-900">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <Image
                  alt={cards[0].image.alt}
                  src={cards[0].image.src}
                  className="h-80 object-cover object-bottom-left"
                  width={800}
                  height={320}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-mist-600 dark:text-mist-400">{cards[0].eyebrow}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-mist-950 dark:text-white">
                    {cards[0].headline}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-mist-600 dark:text-mist-400">{cards[0].description}</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/10" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="relative z-10 h-full rounded-lg bg-white lg:rounded-tr-4xl dark:bg-mist-900">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <Image
                  alt={cards[1].image.alt}
                  src={cards[1].image.src}
                  className="h-80 object-cover object-bottom-left lg:object-bottom-right"
                  width={cards[1].image.width}
                  height={cards[1].image.height}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-mist-600 dark:text-mist-400">{cards[1].eyebrow}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-mist-950 dark:text-white">
                    {cards[1].headline}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-mist-600 dark:text-mist-400">{cards[1].description}</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/10" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="relative z-10 h-full rounded-lg bg-white lg:rounded-bl-4xl dark:bg-mist-900">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <Image
                  alt={cards[2].image.alt}
                  src={cards[2].image.src}
                  className="h-80 object-cover object-center"
                  width={cards[2].image.width}
                  height={cards[2].image.height}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-mist-600 dark:text-mist-400">{cards[2].eyebrow}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-mist-950 dark:text-white">
                    {cards[2].headline}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-mist-600 dark:text-mist-400">{cards[2].description}</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/10" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="relative z-10 h-full rounded-lg bg-white dark:bg-mist-900">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <Image
                  alt={cards[3].image.alt}
                  src={cards[3].image.src}
                  className="h-80 object-cover"
                  width={cards[3].image.width}
                  height={cards[3].image.height}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-mist-600 dark:text-mist-400">{cards[3].eyebrow}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-mist-950 dark:text-white">
                    {cards[3].headline}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-mist-600 dark:text-mist-400">{cards[3].description}</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/10" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="relative z-10 h-full rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-mist-900">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <Image
                  alt={cards[4].image.alt}
                  src={cards[4].image.src}
                  className="h-80 object-cover"
                  width={cards[4].image.width}
                  height={cards[4].image.height}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-mist-600 dark:text-mist-400">{cards[4].eyebrow}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-mist-950 dark:text-white">
                    {cards[4].headline}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-mist-600 dark:text-mist-400">{cards[4].description}</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AbsoluteBentoItemFade() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgba(255,255,255,0.45)_75%,var(--color-white)_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--color-white)_0%,rgba(255,255,255,0.6)_25%,transparent_60%)]"></div>
    </>
  )
}
