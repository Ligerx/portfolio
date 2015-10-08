Template.projectsList.helpers({
  projects: () => {
    return Projects.find({}, { sort: { priority: -1 } });
  }
});
