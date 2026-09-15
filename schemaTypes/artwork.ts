export default {
  name: 'artwork',
  title: 'Artbook',
  type: 'document',
  fields: [
    { name: 'caption',  title: 'Caption',  type: 'string' },
    { name: 'image',    title: 'Image',    type: 'image', options: { hotspot: true } },
    { name: 'rotation', title: 'Rotation', type: 'number' },
    { name: 'order',    title: 'Order',    type: 'number' },
    {
      name: 'tape',
      title: 'Tape Colour',
      type: 'string',
      options: {
        list: [
          { title: 'Maroon',     value: 'tape-r' },
          { title: 'Light Blue', value: 'tape-t' },
          { title: 'Yellow',     value: 'tape-p' },
        ],
      },
    },
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}