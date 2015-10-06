Template.projectsList.helpers({
  projects: () => {
    return Projects.find({});
  }
});
