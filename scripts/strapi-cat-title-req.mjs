import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      fields: [''],
      populate: {
        categories: {
          fields: ['title', 'slug']
        }
      },

      pagination: { pageSize: 1 },
      filters: {
        categories: {
          title: {
            $eq: 'animals'
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-cat-title-res.json';
writeFileSync(file, formatted, 'utf8');
