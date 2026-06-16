import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Julius San Jose — Blog',
    },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Short description shown on the blog listing page.',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        readTime: fields.text({
          label: 'Read Time',
          description: 'e.g. "4 min read"',
          validation: { isRequired: true },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value ?? 'Tag',
          }
        ),
        content: fields.mdx({
          label: 'Content',
          components: {},
        }),
      },
    }),
  },
});
