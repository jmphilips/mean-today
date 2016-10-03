app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })
})