ProjectSchema = new SimpleSchema({
  title: {
    type: String
  },

  /**
   * Here it's the same with an image attribute.
   * summernote is an html editor.
   */
  body: orion.attribute('summernote', {
      label: 'Body'
  }),

  array: {
    type: [String],
    label: "Array test",
  },

  /**
   * This attribute sets the user id to that of the user that created
   * this post automatically.
   */
  createdAt: orion.attribute('createdAt')
});
