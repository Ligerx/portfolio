SectionSchema = new SimpleSchema({
  title: {
    type: String
  },

  /**
   * Used to order projects
   */
  priority: {
    type: Number
  },

  description: orion.attribute('summernote', {
    label: 'Description'
  }),

  imageUrls: {
    type: [String]
  },
});


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

  /**
   * Used to order projects
   */
  priority: {
    type: Number
  },

  description: orion.attribute('summernote', {
      label: 'Description'
  }),

  /**
   * link to the thumbnail show on the home page
   */
  thumbnailUrl: {
    type: String
  },

  sections: {
    type: [SectionSchema],
    label: "Sections"
  },

  createdAt: orion.attribute('createdAt')
});
