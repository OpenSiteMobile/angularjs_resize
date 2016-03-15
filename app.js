var app = angular.module('app', ['ngResize']);

app.directive(
    'resizeTest',
    ['resize', function (resize) {
        return {
            restrict:'A',
            controller: function ($scope) {
                $scope.$on(
                    'resize',
                    function (data, $event) {
                        $scope.size = $event;
                    }
                );
            },
            template:'<li data-test-item ng-repeat="item in testitems">{{item.title}}</li>',
            link:function ($scope, $element, $attribute) {
                var i = 0;

                $scope.testitems = [];

                for (i = 0; i < 500; i += 1) {
                    $scope.testitems.push({ title: 'test item ' + i, value: i });
                }
            }
        };
    }]
);
