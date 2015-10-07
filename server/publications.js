Meteor.publish('allProjects', () => {
  return Projects.find({
    // Only show active projects
    active: true,
  },
  {
    // Sort by descending priority.
    // This way, new projects can just have bigger numbers.
    sort: { priority: -1 },

    // Disable reactivity because I don't need it!
    reactive: false
  });
});

Meteor.publish('allSections', () => {
  return Sections.find({},
  {
    // Sort by descending priority.
    sort: { priority: -1 },

    // Disable reactivity because I don't need it!
    reactive: false
  });
});
