import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { FooterWithLinksAndSocialIcons } from '@/components/sections/footer-with-links-and-social-icons'
import { FooterLink, SocialLink } from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import { NavbarLink, NavbarLogo } from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { NavbarWithLogoActionsAndLeftAlignedLinks } from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import { MoveRight, PlayCircleIcon } from 'lucide-react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'JMH Maturaprojekt Demo',
  description:
    'Die digitale Mitarbeiterverwaltung ist ab Februar 2026 in Betrieb und ersetzt damit die bisherige Lösung. ',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head></head>
      <body className={`${inter.className} `}>
        <>
          <NavbarWithLogoActionsAndLeftAlignedLinks
            id="navbar"
            logo={
              <NavbarLogo href="/#hero">
                <div>Maturaprojekt x JMH </div>
              </NavbarLogo>
            }
            links={
              <>
                <NavbarLink href="/#features">Projekt</NavbarLink>
                <NavbarLink href="/#weitere-features">Features</NavbarLink>
                <NavbarLink href="/#team">Team</NavbarLink>
                <NavbarLink href="/#danke">Danksagung</NavbarLink>
                <ButtonLink size="lg" href="mailto:hello@davidkathrein.at" className="mt-2 md:hidden">
                  Warteliste beitreten <MoveRight size={20} />
                </ButtonLink>
              </>
            }
            actions={
              <>
                <PlainButtonLink href="#" className="max-md:hidden">
                  Demovideo <PlayCircleIcon size={16} />
                </PlainButtonLink>
                <ButtonLink className="max-sm:hidden" href="mailto:hello@davidkathrein.at">
                  Warteliste beitreten <MoveRight size={16} />
                </ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithLinksAndSocialIcons
            id="footer"
            links={
              <>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Help Center</FooterLink>
                <FooterLink href="#">Press Kit</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </>
            }
            socialLinks={
              <>
                <SocialLink href="https://x.com" name="X">
                  <XIcon />
                </SocialLink>
                <SocialLink href="https://github.com" name="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.youtube.com" name="YouTube">
                  <YouTubeIcon />
                </SocialLink>
              </>
            }
            fineprint="© David Kathrein 2026"
          />
        </>
      </body>
    </html>
  )
}
