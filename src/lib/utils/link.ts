import { LinkProps } from 'next/link';

import { slugify } from '@/lib/utils/slugify';
import { FieldLinkGroup } from '@/payload/payload-types';

type InternalLinkProps = {
  'data-umami-event'?: string | null;
  'data-umami-event-id'?: string | null;
  'data-umami-event-url'?: string | null;
};

const getInternalLink = (link: FieldLinkGroup['page']) =>
  typeof link === 'string' ? link : link?.slug;

export const linkProps = (link: FieldLinkGroup): LinkProps & InternalLinkProps => {
  const href = link.type === 'internal' ? getInternalLink(link.page) : link.url;

  return {
    href: href || '/',
    ...(link.newTab ? { target: '_blank' } : {}),
    ...(link.type === 'external' ? { rel: link.rel?.join(',') } : {}),
    'data-umami-event': link.umamiEvent ?? 'Link',
    'data-umami-event-id': link.umamiEventId ?? slugify(link.text),
    'data-umami-event-url': href || '/',
  };
};
