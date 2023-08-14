import qs from 'qs';

//const CMS_URL = 'http://localhost:1337';//127.0.0.1:1337

const CMS_URL = 'http:127.0.0.1:1337';

export async function getPosts() {
  const url =
    `${CMS_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 }
      },
      { encodeValuesOnly: true }
    );
  console.log('getPosts:', url);
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url
  }));
}
