Template.singleProject.helpers({
  projects: () => {
    let param = FlowRouter.get('projectUrl');
    return Projects.find({ url: param });
  }
});
