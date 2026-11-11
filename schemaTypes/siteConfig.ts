export default {
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    { name: 'name',      title: 'Your Name',    type: 'string' },
    { name: 'fullName',  title: 'Full Name',    type: 'string', description: 'Not shown on the site yet' },
    { name: 'tagline',   title: 'Tagline',      type: 'string' },
    { name: 'bio',       title: 'Bio',          type: 'text'   },
    { name: 'location',  title: 'Location',     type: 'string' },
    { name: 'email',     title: 'Email',        type: 'string' },
    { name: 'github',    title: 'GitHub URL',   type: 'url'    },
    { name: 'linkedin',  title: 'LinkedIn URL', type: 'url'    },
    { name: 'instagram', title: 'Instagram URL',type: 'url'    },
    {
      name: 'cvFile',
      title: 'CV (PDF upload)',
      description: 'Upload the CV here. The "download cv" buttons use this first.',
      type: 'file',
      options: { accept: 'application/pdf' },
    },
    {
      name: 'cvUrl',
      title: 'CV link (backup)',
      description: 'Only used when no PDF is uploaded above.',
      type: 'string',
    },
    { name: 'currently', title: 'Currently (live status)', type: 'string' },
    // Not shown anywhere on the site right now, so hidden in the Studio
    { name: 'photo', title: 'Your Photo', type: 'image', options: { hotspot: true }, hidden: true },
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