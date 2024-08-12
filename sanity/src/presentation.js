import { map } from 'rxjs';

export const locations = (params, context) => {
  if (['page' /* TODO: add stuff like a post */].includes(params.type)) {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{title,metadata}`,
      params,
      { perspective: 'previewDraft' },
    );

    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc.metadata || !doc.metadata.slug || !doc.metadata.slug.current) return null;

        /* const directory = params.type === 'post' ? '/portfolio' : '' */
        const slug = doc.metadata.slug.current;
        const path = slug === 'index' ? '' : `/${slug}`;

        return {
          locations: [
            {
              title: doc.title || doc.metadata.title || 'untitled',
              href: [directory, path].filter(boolean).join(''),
            }
          ]
        }
      })
    )
  }

  return null;
}