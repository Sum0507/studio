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
    { name: 'cvUrl',     title: 'CV File URL',  type: 'string' },
    { name: 'photo', title: 'Your Photo', type: 'image', options: { hotspot: true } },
    {
      name: 'roles',
      title: 'Rotating Roles (hero text)',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}