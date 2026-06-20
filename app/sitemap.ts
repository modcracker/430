import { MetadataRoute } from 'next';
import { factSections } from '@/lib/content';
import { pitchAudiences } from '@/lib/pitches';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://430.me';
  const currentDate = new Date();

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#acquisition`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ];

  const wikiPages = factSections.flatMap((section) => [
    {
      url: `${baseUrl}/#${section.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wiki/${section.id}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]);

  const pitchPages = pitchAudiences.map((pitch) => ({
    url: `${baseUrl}/pitch/${pitch.id}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...mainPages, ...wikiPages, ...pitchPages];
}
