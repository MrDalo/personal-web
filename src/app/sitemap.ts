import type { MetadataRoute } from 'next'
import { siteConfig } from './site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${siteConfig.url}${siteConfig.profileImage}`],
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
