import qs from 'qs';
import { marked } from 'marked';

//const CMS_URL = 'http://localhost:1337';//127.0.0.1:1337

const CMS_URL = 'http:127.0.0.1:1337';

export async function getPosts() {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'excerpt', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 }
      },
      { encodeValuesOnly: true }
    );
  //console.log('getPosts:', url);
  const response = await fetch(url);
  const { data } = await response.json();

  const formattedPosts = data.map(({ attributes }) => {
    const date = new Date(attributes.publishedAt);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);

    return {
      slug: attributes.slug,
      title: attributes.title,
      excerpt: attributes.excerpt,
      // body: attributes.body, //convert markdown to html
      date: formattedDate,
      image: CMS_URL + attributes.image.data.attributes.url
    };
  });
  return formattedPosts;
}

export async function getCategories(category) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'excerpt', 'subtitle', 'publishedAt'],
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
              $eq: category
            }
          }
        }
      },
      { encodeValuesOnly: true }
    );
  //console.log('getPosts:', url);
  const response = await fetch(url);
  const { data } = await response.json();

  const formattedCatPosts = data.map(({ attributes }) => {
    const date = new Date(attributes.publishedAt);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);

    return {
      slug: attributes.slug,
      title: attributes.title,
      excerpt: attributes.excerpt,
      // body: attributes.body, //convert markdown to html
      date: formattedDate,
      image: CMS_URL + attributes.image.data.attributes.url
    };
  });
  return formattedCatPosts;
}

export async function getPost(slug) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'body', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, withCount: false }
      },
      { encodeValuesOnly: true }
    );

  console.log('getPost:', url);

  const response = await fetch(url);
  const { data } = await response.json();
  const { attributes } = data[0];

  // Format the date
  const dateObj = new Date(attributes.publishedAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(dateObj);

  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    excerpt: attributes.excerpt,
    body: attributes.body, //convert markdown to html
    // date: formattedDate,
    date: formattedDate,
    image: CMS_URL + attributes.image.data.attributes.url
  };
}

//takes in the category slug and tells us the catgeory title.
export async function getCategoryTitle(category) {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: [''],
        populate: {
          categories: {
            sort: ['name:asc'],
            fields: ['title', 'slug']
          }
        },
        pagination: { pageSize: 2 },
        filters: {
          categories: {
            title: {
              $eq: category
            }
          }
        }
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  const { data } = await response.json();

  const categories = data[0]?.attributes?.categories?.data;
  for (let cat of categories) {
    if (cat.attributes.slug === category) {
      return cat.attributes.title;
    }
  }
  // Return null or some default value if no match found
  return null;
}
