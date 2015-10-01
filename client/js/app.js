angular.module('RepsApp', [
'RepsAppControllers'

]);


angular
.module('RepsAppControllers', [
  'repsService'
])
  .controller('MainCtrl', function (reps) {
    var main = this;
    main.loading = false;
    main.reps = [];
    main.congressType = 'reps';
    main.loading = false;
    main.apis = [
      {
        label: 'Zip',
        method: function (zip){
          main.loading = true;
          reps('all', 'zip', zip).then(function (data) {
            main.reps = data;
            main.loading = false;
          });
        }
      },
      {
        label: 'Last Name',
        method: function (name){
          main.loading = true;
          reps(main.congressType, 'name', name).then(function (data){
            main.reps = data;
            main.loading = false;
          });
        }
      },
      {
        label: 'State',
        method: function (state){
          main.loading = true;
          reps(main.congressType, 'state', state).then(function (data){
            main.reps = data;
            main.loading = false;
          });
        }
      }
    ];
  main.criteria = main.apis[0];
/*

     main.searchByZip = function (zip) {
      reps.allByZip(zip).then(function (data) {
        main.reps = data;
      });
    };

    main.searchRepsByName = function (name) {
      reps.repsByName(name).then(function (data) {
        main.reps = data;
      });
    };

    main.searchRepsByState = function (state) {
      reps.repsByState(state).then(function (data) {
        main.reps = data;
      });
    };

    main.searchSensByName = function (name) {
      reps.sensByName(name).then(function (data) {
        main.reps = data;
      });
    };

    main.searchSensByState = function (senState) {
      reps.sensByState(senState).then(function (data) {
        main.reps = data;
      });
    };

    **/
  });




angular
  .module ('repsService', [])
  .factory('reps', function($http) {
    var host = 'http://dgm-representatives.herokuapp.com';


    function search(type, criteria, query) {
      return $http
        .get(host + '/' + type + '/by-' + criteria + '/' + query)
        .then(function (response){
          return response.data;
        });
    }

   // search.allByZip = search.bind(null, 'all', 'zip');
  //  search.repsByName = search.bind(null, 'reps', 'name');
  //  search.repsByState = search.bind(null, 'reps', 'state');
  //  search.sensByName = search.bind(null, 'sens', 'name');
 //   search.sensByState = search.bind(null, 'sens', 'state');


    return search;
  });
/**
    return {
      allByZip: function (zip){
        return $http
          .get(host +'/all/by-zip/' + zip)
          .then(function (response) {
            return response.data;
          });
      },
      repsByName: function (name) {
        return $http
        .get(host + '/reps/by-name/' + name)
        .then(function (response) {
          return response.data;
        });
      },
      repsByState: function (state) {
        return $http
        .get(host + '/reps/by-state/' + state)
        .then(function (response) {
          return response.data;
        });
      },
      sensByName: function (name) {
        return $http
        .get(host + '/sens/by-name/' + name)
        .then(function (response) {
          return response.data;
        });
      },
      sensByState: function (state) {
        return $http
        .get(host + '/sens/by-state/' + state)
        .then(function (response) {
          return response.data;
        });
      }
    };

  });

*/
