import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import { NavbarLink, NavbarLogo } from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { NavbarWithLogoActionsAndLeftAlignedLinks } from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oatmeal Kit Demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLogoActionsAndLeftAlignedLinks
            id="navbar"
            logo={
              <NavbarLogo href="#">
                <img
                  src="https://assets.tailwindplus.com/logos/oatmeal-familjen.svg?color=mist-950"
                  alt="Oatmeal"
                  className="dark:hidden"
                  width={96}
                  height={28}
                />
                <img
                  src="https://assets.tailwindplus.com/logos/oatmeal-familjen.svg?color=white"
                  alt="Oatmeal"
                  className="not-dark:hidden"
                  width={96}
                  height={28}
                />
              </NavbarLogo>
            }
            links={
              <>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Docs</NavbarLink>
                <NavbarLink href="#" className="sm:hidden">
                  Log in
                </NavbarLink>
              </>
            }
            actions={
              <>
                <PlainButtonLink href="#" className="max-sm:hidden">
                  Log in
                </PlainButtonLink>
                <ButtonLink href="#">Get started</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <NewsletterForm
                headline="Stay in the loop"
                subheadline={
                  <p>
                    Get customer support tips, product updates and customer stories that you can archive as soon as they
                    arrive.
                  </p>
                }
                action="#"
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="#">Features</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Integrations</FooterLink>
                </FooterCategory>
                <FooterCategory title="Company">
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Press Kit</FooterLink>
                </FooterCategory>
                <FooterCategory title="Resources">
                  <FooterLink href="#">Help Center</FooterLink>
                  <FooterLink href="#">API Docs</FooterLink>
                  <FooterLink href="#">Status</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterCategory>
                <FooterCategory title="Legal">
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms of Service</FooterLink>
                  <FooterLink href="#">Security</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 2025 Oatmeal, Inc."
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
          />
        </>
      </body>
    </html>
  )
}
