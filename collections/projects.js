Projects = new orion.collection('projects', {
  singularName: 'post',
  pluralName: 'posts',


  tabular: {
    columns: [
      { data: 'url', title: 'URL'},
      { data: "title", title: "Title" },
      { data: 'active', title: 'Active?'},
      { data: 'priority', title: 'Priority'},
    ]
  }
});

Projects.attachSchema(ProjectSchema)
