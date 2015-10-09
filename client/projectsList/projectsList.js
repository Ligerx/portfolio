Template.projectsList.helpers({
  projects: () => {
    return Projects.find({}, {
        sort: { priority: -1 },
        reactive: false
    });
  }
});

Template.projectsList.onCreated(function() {
  DocHead.setTitle('Alex Wang');
});
