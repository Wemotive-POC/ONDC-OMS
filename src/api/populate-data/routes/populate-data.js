module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/populate-data',
      handler: 'populate-data.create', // Adjust the controller and action name as needed
    },
  ]
}
