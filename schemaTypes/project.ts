export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Title',       type: 'string' },
    { name: 'year',        title: 'Year',        type: 'string' },
    { name: 'stack',       title: 'Tech Stack',  type: 'string' },
    { name: 'description', title: 'Description', type: 'text'   },
    { name: 'github',      title: 'GitHub URL',  type: 'url'    },
    { name: 'live',        title: 'Live URL',    type: 'url'    },
    { name: 'order',       title: 'Order',       type: 'number' },
    {
      name: 'previewImage',
      title: 'Preview GIF / Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}