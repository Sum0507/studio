export default {
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    { name: 'title',      title: 'Title',       type: 'string' },
    { name: 'venue',      title: 'Venue',       type: 'string' },
    { name: 'year',       title: 'Year',        type: 'string' },
    { name: 'coauthors',  title: 'Co-authors',  type: 'string' },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Under Review', value: 'under review' },
          { title: 'In Progress',  value: 'in progress'  },
          { title: 'Published',    value: 'published'    },
        ],
      },
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Order', type: 'number' },
  ],
}