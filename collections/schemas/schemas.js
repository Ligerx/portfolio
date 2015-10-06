SectionSchema = new SimpleSchema({
  title: {
    type: String
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

  description: orion.attribute('summernote', {
      label: 'Description'
  }),

  sections: {
    type: [SectionSchema],
    label: "Sections"
  },

  createdAt: orion.attribute('createdAt')
});
