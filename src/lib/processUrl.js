import { stegaClean } from '@sanity/client/stega'
import { baseUrl } from '@/lib/env';

export default function (page,
  {
    base = true,
    params
  } = {}
) {
  const slug = page?.metadata?.slug?.current;
  const path = slug === 'index' ? null : slug;

  return (
    (base ? baseUrl + '/' : '/') +
    [path, stegaClean(params)].filter(Boolean).join('/')
  );
}