Meteor.publish('allProjects', () => {
  return Projects.find({
    active: true,
  },
  {
    sort: { priority: -1 },
    reactive: false
  });
});
