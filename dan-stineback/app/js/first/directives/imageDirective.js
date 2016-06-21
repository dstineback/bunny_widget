'use strict';
module.exports = function(app){
  app.directive('imageDisplay', function(){
    return{
      restrict: 'E',
      template: '<img src="{{url}}" height="{{height}}" width="{{width}}" alt="{{title}}" description="{{description}}">',
      scope: {
        url: '@',
        height: '@',
        width: '@',
        alt: '@title',
        description: '@'
      }
    };
  });
};
