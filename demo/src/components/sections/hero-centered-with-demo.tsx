import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Spotlight } from '../elements/Spotlight'
import { Text } from '../elements/text'

export function HeroCenteredWithDemo({
  eyebrow,
  headline,
  subheadline,
  cta,
  demo,
  footer,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  demo?: ReactNode
  footer?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('max-w-screen py-8 sm:py-12 md:py-16', className)} {...props}>
      <Container className="flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-12 sm:gap-20 md:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            {eyebrow}
            <Spotlight />
            <Heading className="relative z-10 max-w-5xl text-center">{headline}</Heading>
            <Text size="lg" className="flex max-w-3xl flex-col gap-4 text-center">
              {subheadline}
            </Text>
            {cta}
          </div>
          {demo}
        </div>
        {footer}
      </Container>
    </section>
  )
}
