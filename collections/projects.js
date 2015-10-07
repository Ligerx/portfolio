/**
 * Sections collection
 */
Sections = new orion.collection('sections', {
  singularName: 'section',
  pluralName: 'sections',

  tabular: {
    columns: [
      { data: "fullTitle", title: "Full Title" },
      { data: "title", title: "Title" },
      { data: 'priority', title: 'Priority'},
    ]
  }
});

/**
 * Section schema
 */
SectionSchema = new SimpleSchema({
  title: {
    type: String
  },

  // used to identify when picking relationship
  fullTitle: {
    type: String
  },

  // Used to order sections
  priority: {
    type: Number
  },

  description: orion.attribute('summernote', {
    label: 'Description',
    optional: true
  }),

  // Array of images + their alt description
  images: {
    type: [Object],
    optional: true
  },

  'images.$.image': orion.attribute('image', {
    label: 'Image'
  }),

  'images.$.alt': {
    type: String
  },

  // Whatever's here will be rendered as is
  arbitraryHtml: {
    type: String,
    optional: true
  },

  isFullLength: {
    type: Boolean,
    defaultValue: false,
    label: 'Stretch image(s) to full length?'
  },

  createdAt: orion.attribute('createdAt'),
});

Sections.attachSchema(SectionSchema);





/**
 * Project collection
 */
Projects = new orion.collection('projects', {
  singularName: 'post',
  pluralName: 'posts',

  tabular: {
    columns: [
      { data: 'url', title: 'URL'},
      { data: 'title', title: 'Title' },
      { data: 'active', title: 'Active?'},
      { data: 'priority', title: 'Priority'},
    ]
  }
});

/**
 * Project schema
 * has relationship with sections
 */
ProjectSchema = new SimpleSchema({
  /**
   * what is show in the URL when viewing this page.
   * Also sort of acts like an index.
   */
  url: {
    type: String
  },

  title: {
    type: String
  },

  active: {
    label: "Active?",
    type: Boolean,
    defaultValue: true
  },

  // Used to order projects
  priority: {
    type: Number
  },

  // This should be allowed to have html
  // that can be rendered!
  description: orion.attribute('summernote', {
      label: 'Description',
      optional: true
  }),

  // Whatever's here will be rendered as is
  arbitraryHtml: {
    type: String,
    optional: true
  },

  // image show on the home page
  cardImage: orion.attribute('image', {
    label: 'Home page image',
    optional: true
  }),

  // image show on the project page
  pageImage: orion.attribute('image', {
    label: 'This page image',
    optional: true
  }),

  sections: orion.attribute('hasMany', {
    label: 'Sections',
    optional: true
  },
  {
    titleField: 'fullTitle',
    collection: Sections,
    publicationName: 'uniqueSectionsPublicationName'
  }),

  createdAt: orion.attribute('createdAt'),
});

Projects.attachSchema(ProjectSchema);
