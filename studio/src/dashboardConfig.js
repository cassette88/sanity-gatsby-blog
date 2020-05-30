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
                  buildHookId: '5ed28c7387e8c7e4bf3a8209',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qx6xfxuz',
                  apiId: '127b18f8-4bc1-41db-96ad-d958c118b3e1'
                },
                {
                  buildHookId: '5ed28c731c8448b005327cdc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-owz9vsc3',
                  apiId: '462675e2-c913-4c20-baba-832e79dea108'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cassette88/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-owz9vsc3.netlify.app', category: 'apps' }
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
