import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import BentoTwoRowThreeColSecondRow from '@/components/sections/bento-two-row-three-col-second-row'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { MoveRight, PlayCircleIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'JMH Maturaprojekt Demo',
}

// eigene Felder und Vorlagen
// One-Click PDF-Export
// Kalendersynchronisation
// intelligente Überprüfungen

// übersichtliche Änderungshistorie
// Ein Persönlicher Account für all deine Organisationen
// Mitarbeiter einladen und Berechtigungen gezielt verwalten

// Einfache Bedienung, keine Schulung nötig
// Daten zentralisiert verfügbar

export default function Page() {
  return (
    <>
      <Main>
        {/* Hero */}
        <HeroCenteredWithDemo
          id="hero"
          eyebrow={<AnnouncementBadge href="#" text="Live-Betrieb ab Februar 2026" cta="Mehr erfahren" />}
          headline="Mitarbeiterverwaltung, so einfach wie nie zuvor."
          subheadline={
            <p>
              Plane Führungen effizient, erstelle Dienstpläne in wenigen Klicks und behalte alle Informationen zu deinen
              Vermittler:innen zentral im Blick – entwickelt für Museen und kulturelle Einrichtungen.
            </p>
          }
          cta={
            <div className="flex gap-2">
              <ButtonLink size={'lg'} href="mailto:hello@davidkathrein.at">
                Warteliste beitreten <MoveRight size={16} />
              </ButtonLink>
              <PlainButtonLink size={'lg'} href="#">
                Demovideo ansehen <PlayCircleIcon size={16} />
              </PlainButtonLink>
            </div>
          }
          demo={
            <>
              <Screenshot className="rounded-md lg:hidden" wallpaper="blue" placement="bottom-right">
                <Image
                  src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/home-mobile.png"
                  alt="Product Demo mobile"
                  width={1670}
                  height={1408}
                  className="md:hidden"
                />
                <Image
                  src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/home-tablet.png"
                  alt="Product Demo tablet"
                  width={2000}
                  height={1408}
                  className="max-md:hidden"
                />
              </Screenshot>
              <Screenshot className="rounded-lg max-lg:hidden" wallpaper="blue" placement="bottom">
                <Image
                  src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/home-desktop.png"
                  alt="Product Demo desktop"
                  width={3440}
                  height={1990}
                />
              </Screenshot>
            </>
          }
        />

        {/* Features */}
        <FeaturesStackedAlternatingWithDemos
          id="features"
          headline="Alles, was du für eine effiziente Einsatzplanung brauchst."
          subheadline={
            <p>
              Plane schneller, arbeite strukturierter und verwalte deine Vermittler:innen in einer klaren, zentralen
              Plattform – ohne Chaos, ohne Excel.
            </p>
          }
          features={
            <>
              <Feature
                headline="Intelligente Dienstplanung"
                subheadline={
                  <p>
                    Erstelle Dienstpläne in wenigen Minuten. Vermittler:innen tragen sich selbstständig in passende
                    Führungen ein, während automatische Konflikt- und Verfügbarkeitsprüfungen für reibungslose Abläufe
                    sorgen.
                  </p>
                }
                cta={
                  <Link href="#">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <Image
                      src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/helfer-eintragen-check.png"
                      alt="Helferansicht mit Eintragen und automatischer Konfliktprüfung"
                      className="bg-white/75"
                      width={1500}
                      height={1240}
                    />
                  </Screenshot>
                }
              />
              <Feature
                headline="Zentrale Mitarbeiterdaten"
                subheadline={
                  <p>
                    Alle relevanten Informationen zu deinen Vermittler:innen an einem Ort: Kontaktdaten,
                    Qualifikationen, Verfügbarkeiten, Schlüsselzugänge und mehr. Flexibel erweiterbar und jederzeit
                    aktuell.
                  </p>
                }
                cta={
                  <Link href="#">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <Image
                      src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/mitarbeiterdaten.png"
                      alt=""
                      className="bg-white/75"
                      width={1500}
                      height={1240}
                    />
                  </Screenshot>
                }
              />
              <Feature
                headline="Nahtlose Kommunikation"
                subheadline={
                  <p>
                    Alle Änderungen werden übersichtlich in einer persönlichen Mitteilungszentrale angezeigt. Wichtige
                    Updates erhalten Vermittler:innen automatisch per E-Mail – angepasst an ihre individuellen
                    Präferenzen.
                  </p>
                }
                cta={
                  <Link href="#">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="brown" placement="bottom-left">
                    <Image
                      src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/mitteilungszentrale-breiter.png"
                      alt=""
                      className="bg-white/75 max-lg:hidden dark:hidden"
                      width={1500}
                      height={1240}
                    />
                  </Screenshot>
                }
              />
            </>
          }
        />

        <BentoTwoRowThreeColSecondRow id="weitere-features" />

        {/* Testimonial */}
        {/* <TestimonialTwoColumnWithLargePhoto
          id="testimonial"
          quote={
            <p>
              Die neue Plattform hat unsere Vermittlungsplanung revolutioniert. Was früher Stunden dauerte, erledigen
              wir jetzt in wenigen Minuten. Die Übersichtlichkeit ist ausgezeichnet.
            </p>
          }
          img={
            <Image
              src="https://assets.tailwindplus.com/avatars/16.webp?w=1400&h=1000"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={1400}
              height={1000}
            />
          }
          name="Barbara Staudinger"
          byline="Direktorin, Jüdisches Museum Wien"
        /> */}

        {/* Stats */}
        <StatsWithGraph
          id="stats"
          eyebrow="Bewährt im Einsatz"
          headline="Die Plattform für moderne Kulturvermittlung."
          subheadline={
            <p>
              Wir unterstützen Museen und kulturelle Einrichtungen dabei, ihre Vermittlungsprogramme professionell zu
              organisieren – von der Personalplanung bis zur Einsatzkoordination, alles an einem Ort.
            </p>
          }
        >
          <Stat stat="bald tausende" text="Vermittlungseinsätze erfolgreich koordiniert und vermittelt" />
          <Stat stat="bis zu 10x" text="Schneller als klassische Excel-Tabellen – und deutlich zuverlässiger" />
        </StatsWithGraph>

        {/* Call To Action */}
        <CallToActionSimple
          id="call-to-action"
          headline="Bereit für effiziente Mitarbeiterverwaltung?"
          subheadline={
            <p>
              Tritt der Warteliste bei und gehöre zu den ersten, die ab Februar 2026 von unserer Plattform profitieren.
              Kostenlos für kulturelle Einrichtungen.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="mailto:hello@davidkathrein.at" size="lg">
                Warteliste beitreten <MoveRight size={16} />
              </ButtonLink>

              <PlainButtonLink href="#" size="lg">
                Demo ansehen <PlayCircleIcon size={16} />
              </PlainButtonLink>
            </div>
          }
        />
      </Main>
    </>
  )
}
