export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec9036445228ac19879970a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blogg-studio',
                  apiId: '1777797a-fce8-4a37-8125-2c22ad9daf36'
                },
                {
                  buildHookId: '5ec9036451f1bc6d7d610fbf',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blogg',
                  apiId: 'b4969e81-ed4e-436c-aaa2-747b1500173e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-gridsome-blogg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blogg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
