/**
 * Global subscription to all the data because there's always only 1 data set.
 * This way I don't have to deal with loading different subscriptions between pages.
 */
FlowRouter.subscriptions = function() {
  this.register('allProjects', Meteor.subscribe('allProjects'));
  this.register('allSections', Meteor.subscribe('allSections'));
}

/**
 * Home Page
 */
FlowRouter.route('/', {
  action: (params, queryParams) => {
    BlazeLayout.render('layout', { top: 'header', main: 'projectsList' })
  },

  name: 'home'
});

/**
 * Individual project page
 */
FlowRouter.route('/:projectUrl', {
  action: (params, queryParams) => {
    BlazeLayout.render('layout', { top: 'header', main: 'singleProject' })
  },

  name: 'project'
});
