import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      filters: { slug: { $eq: 'post-5' } },
      fields: ['slug', 'title', 'subtitle', 'excerpt', 'body', 'publishedAt'],
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-sp-response.json';
writeFileSync(file, formatted, 'utf8');
