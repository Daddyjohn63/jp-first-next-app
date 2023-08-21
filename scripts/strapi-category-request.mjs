import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      fields: ['slug', 'title', 'subtitle', 'excerpt', 'publishedAt'],
      populate: {
        categories: {
          sort: ['name:asc']
        },
        image: {
          fields: ['url']
        }
      },
      sort: ['publishedAt:desc'],
      pagination: { pageSize: 6 },
      filters: {
        categories: {
          title: {
            $eq: 'country'
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-category-res.json';
writeFileSync(file, formatted, 'utf8');
