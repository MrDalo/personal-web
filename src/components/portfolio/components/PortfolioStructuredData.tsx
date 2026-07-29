import { siteConfig } from '@/app/site-config'

const personId = `${siteConfig.url}/#person`
const websiteId = `${siteConfig.url}/#website`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        '@id': personId,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profile-page`,
      url: `${siteConfig.url}/`,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        '@id': websiteId,
      },
      mainEntity: {
        '@id': personId,
      },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      email: siteConfig.email,
      jobTitle: 'Senior Front-end Engineer',
      description: siteConfig.description,
      sameAs: Object.values(siteConfig.socialProfiles),
      worksFor: {
        '@type': 'Organization',
        name: 'SONET · Payten',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Masaryk University',
      },
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'Accessible web development',
        'Design systems',
        'Front-end testing',
        'GSAP animation',
        'AI engineering workflows',
        'Model Context Protocol',
      ],
      knowsLanguage: ['Slovak', 'English', 'Czech', 'German'],
    },
  ],
}

const PortfolioStructuredData = () => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
    }}
  />
)

export default PortfolioStructuredData
