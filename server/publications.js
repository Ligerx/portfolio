Meteor.publish('allProjects', () => {
  return Projects.find({
    active: true,
  }, { sort: { priority: -1 } });
});

// Meteor.publish('singleProject', projectUrl => {
//   return Projects.find({ url: projectUrl });
// });
