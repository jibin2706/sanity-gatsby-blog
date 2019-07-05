export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d1fb7322269169578ccd6e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o2224d8t',
                  apiId: '892a5d8f-b9f0-4d3d-91b6-be9c99e0d4e7'
                },
                {
                  buildHookId: '5d1fb732427da8aab39fb330',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pbmgbksb',
                  apiId: '3d845689-5c4f-4aaf-91ac-ed57a4c5dd62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jibin2706/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pbmgbksb.netlify.com', category: 'apps'}
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
