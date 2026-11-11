export default {
  name: 'artwork',
  title: 'Artbook',
  type: 'document',
  fields: [
    { name: 'caption',  title: 'Caption',  type: 'string' },
    { name: 'image',    title: 'Image',    type: 'image', options: { hotspot: true } },
    // rotation and tape were for the old polaroid cards; the site no longer
    // reads them, so they are hidden (existing values are kept)
    { name: 'rotation', title: 'Rotation', type: 'number', hidden: true },
    { name: 'order',    title: 'Order',    type: 'number' },
    {
      name: 'tape',
      title: 'Tape Colour',
      type: 'string',
      hidden: true,
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