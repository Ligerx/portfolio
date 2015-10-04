Projects = new orion.collection('projects', {
  singularName: 'post',
  pluralName: 'posts',


  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('summernote', 'body', 'Body'),
      { data: 'array', title: 'blarg' }
    ]
  }
});

Projects.attachSchema(ProjectSchema)
