export default {
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    { name: 'name',      title: 'Your Name',    type: 'string' },
    { name: 'fullName',  title: 'Full Name',    type: 'string' },
    { name: 'tagline',   title: 'Tagline',      type: 'string' },
    { name: 'bio',       title: 'Bio',          type: 'text'   },
    { name: 'location',  title: 'Location',     type: 'string' },
    { name: 'email',     title: 'Email',        type: 'string' },
    { name: 'github',    title: 'GitHub URL',   type: 'url'    },
    { name: 'linkedin',  title: 'LinkedIn URL', type: 'url'    },
    { name: 'instagram', title: 'Instagram URL',type: 'url'    },
    { name: 'cvFile',    title: 'CV (upload a PDF)', type: 'file', options: { accept: '.pdf' } },
    { name: 'cvUrl',     title: 'CV Link (backup, used only if no PDF is uploaded)', type: 'string' },
    { name: 'currently', title: 'Currently (live status)', type: 'string' },
    { name: 'photo', title: 'Your Photo', type: 'image', options: { hotspot: true } },
    { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
    {
      name: 'roles',
      title: 'Rotating Roles (hero text)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category', type: 'string' },
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { title: 'category' },
          },
        },
      ],
    },
  ],
}