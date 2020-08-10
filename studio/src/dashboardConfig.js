export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f31b1b2586658e5b06f560c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-92d1emmp',
                  apiId: 'f8da4866-74ce-4a24-a2bf-e20f3b58a85c'
                },
                {
                  buildHookId: '5f31b1b2586658c74c6f59d1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zrrjneso',
                  apiId: '3e911dab-3c4b-4aae-94d8-814f40da6fcf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geisera/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zrrjneso.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
