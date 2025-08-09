import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'
import { selectedWorks } from '../../data/works'
import Container from '../ui/Container'
import UnderlineLink from '../ui/UnderlineLink'
import WorkDescription from '../ui/WorkDescription'
import WorkTitle from '../ui/WorkTitle'

const redaction35Italic = localFont({
  src: '../../fonts/Redaction_35-Italic.woff2',
})

export default function SelectedWorks() {
  return (
    <Container>
      <div className="flex items-center">
        <h1 className={twMerge('text-3xl md:text-6xl', redaction35Italic.className)}>
          Selected Works
        </h1>
      </div>
      <div className="space-y-16 md:space-y-32 mt-16 md:mt-24">
        {selectedWorks.map((work) => (
          <article key={work.id}>
            <WorkTitle
              company={work.company}
              year={work.year}
              companyDescription={work.companyDescription}
              position={work.position}
            />
            <WorkDescription works={work.works} isActive={true} />
          </article>
        ))}

        <UnderlineLink
          href="/works"
          className={twMerge('text-3xl', redaction35Italic.className)}
        >
          View All Works
        </UnderlineLink>
      </div>
    </Container>
  )
}
