import { MetadataRoute } from 'next'
import { projects } from './data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alwood.ovh'

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/projects',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  const projectPages = projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}