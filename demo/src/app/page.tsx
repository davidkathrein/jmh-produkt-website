import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import BentoTwoRowThreeColSecondRow from '@/components/sections/bento-two-row-three-col-second-row'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Faq, FAQsTwoColumnAccordion } from '@/components/sections/faqs-two-column-accordion'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { TeamMember, TeamThreeColumnGrid } from '@/components/sections/team-three-column-grid'
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
          headline="Mitarbeiter&shy;verwaltung, so einfach wie nie zuvor."
          subheadline={
            <p>
              Plane Führungen effizient, erstelle Dienstpläne in wenigen Klicks und behalte alle Informationen zu deinen
              Vermittler:innen zentral im Blick – entwickelt für Museen und kulturelle Einrichtungen.
            </p>
          }
          cta={
            <div className="flex flex-wrap justify-center gap-2">
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

        <TeamThreeColumnGrid
          id="team"
          headline="Unser passioniertes Team"
          subheadline={
            <p>
              Drei Schüler mit einer gemeinsamen Vision: Kulturvermittlung einfacher machen. Im Rahmen unseres
              Maturaprojekts entwickeln wir diese Plattform praxisnah und mit dem Ziel, das Jüdische Museum Hohenems im
              Alltag nachhaltig zu unterstützen.
            </p>
          }
        >
          <TeamMember
            img={
              <Image
                src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/luca.jpg"
                alt="Projektleiter Luca Raffeiner"
                className="not-dark:bg-white/75 dark:bg-black/75"
                width={800}
                height={1000}
              />
            }
            name="Luca Raffeiner"
            byline="Projektleiter"
          />
          <TeamMember
            img={
              <Image
                src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/david-neu.jpg"
                alt="Designer / Entwickler David Kathrein"
                className="not-dark:bg-white/75 dark:bg-black/75"
                width={800}
                height={1000}
              />
            }
            name="David Kathrein"
            byline="Designer / Fullstack-Entwickler (UX-Lead)"
          />
          <TeamMember
            img={
              <Image
                src="https://ajo9kxm7rzpucqha.public.blob.vercel-storage.com/oemer.jpg"
                alt="Entwickler Ömer Yenidede"
                className="not-dark:bg-white/75 dark:bg-black/75"
                width={800}
                height={1000}
              />
            }
            name="Ömer Yenidede"
            byline="Fullstack-Entwickler (Backend-Lead)"
          />
        </TeamThreeColumnGrid>

        {/* Danksagung */}
        <StatsThreeColumnWithDescription
          id="danke"
          heading="Danksagung"
          description={
            <>
              <p>
                Dieses Projekt wäre ohne die Unterstützung vieler Menschen nicht möglich gewesen. Unser besonderer Dank
                gilt dem Team des Jüdischen Museums Hohenems, das uns von Anfang an Vertrauen entgegengebracht und uns
                mit wertvollem Feedback aus der Praxis begleitet hat.
              </p>
              <p>
                Besonders bedanken möchten wir uns beim Café-Team, das uns während unseres Praktikums stets herzlich
                versorgt und zum Abschluss sogar mit einem netten Geschenk überrascht hat. Ein großer Dank gilt außerdem
                dir, Raphael – ohne dich gäbe es dieses Projekt nicht. Deine offene Kommunikation auf Augenhöhe und dein
                großes Vertrauen in uns haben entscheidend zum Gelingen beigetragen.
              </p>
              <p>
                Ebenso danken wir unseren betreuenden Lehrpersonen für die fachliche Begleitung und den Freiraum,
                unseren eigenen Weg gehen zu dürfen. Bei Fragen standen sie uns jederzeit unterstützend zur Seite –
                sogar aus Island (@Fastenbauer). Das ist keineswegs selbstverständlich und schätzen wir sehr.
              </p>
            </>
          }
        ></StatsThreeColumnWithDescription>

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

        {/* Häufige Fragen */}
        <FAQsTwoColumnAccordion headline="Häufige Fragen">
          <Faq
            id="faq-1"
            question="Gibt es eure Plattform wirklich?"
            answer="Ja! Auch wenn sich diese Website wie eine Marketingseite liest, handelt es sich hierbei um ein echtes Produkt, das aktuell zusammen mit dem Jüdischen Museum Hohenems im Rahmen unseres Maturaprojekts entwickelt wird. Ab Februar 2026 wird die Plattform offiziell in Betrieb genommen. Bei ernstem Interesse kannst du dich gerne auf die Warteliste setzen lassen - wir würden uns freuen!"
          />
          <Faq
            id="faq-2"
            question="An wen richtet sich eure Plattform?"
            answer="Wir richten uns primär an Museen, Ausstellungshäuser und sonstige kulturelle Institutionen, die regelmäßig mit Vermittler:innen, Guides oder freien Mitarbeiter:innen arbeiten."
          />
          {/* <Faq
            id="faq-2"
            question="Ist die Plattform Organisationsunabhängig?"
            answer="Ja. Mit einem Account können mehrere Organisationen verwaltet und separat organisiert werden. Vermittler:innen können mit einem persönlichen Account ebenfalls mehreren Organisationen beitreten. Ein Login, ein Passwort, alles übersichtlich an einem Ort."
          /> */}
          <Faq
            id="faq-3"
            question="Wie komme ich auf die Warteliste?"
            answer="Schreib uns einfach eine unverbindliche E-Mail an hello@davidkathrein.at und wir setzen dich auf die Warteliste. Sobald die interne Testphase mit dem Jüdischen Museum Hohenems abgeschlossen ist, informieren wir dich über die nächsten Schritte."
          />
          <Faq
            id="faq-4"
            question="Was kostet die Nutzung eurer Plattform?"
            answer="Unsere Plattform wird für kulturelle Einrichtungen kostenlos angeboten. Für weitere Informationen kannst du uns aber gerne persönlich schreiben."
          />
        </FAQsTwoColumnAccordion>

        {/* Call To Action */}
        <CallToActionSimpleCentered
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
