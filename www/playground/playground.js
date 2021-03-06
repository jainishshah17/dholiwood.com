// playground is a sandbox for ui elements and testing feasibility of new features...
// this file contains controllers, services, etc relating to playground features

// TODO break playground controller out to sub controllers,
// and define in same space as partial for simplicity

function createDataGrid($scope, $http, dataUrl) {

    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };

    $scope.pagingOptions = {
        pageSizes: [10, 25, 100],
        pageSize: 10,
        totalServerItems: 15,
        currentPage: 1
    };

    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(

            function () {
                var data;
                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.get(dataUrl)
                        .success(

                        function (servicesJson) {
                            data = servicesJson.filter(function (item) {
                                return JSON.stringify(
                                        item)
                                    .toLowerCase()
                                    .indexOf(
                                        ft) != -1;
                            });
                            $scope.setPagingData(
                                data,
                                page,
                                pageSize);
                        });
                } else {
                    $http.get(dataUrl).success(

                        function (servicesJson) {
                            // window.alert(servicesJson);
                            $scope.setPagingData(
                                servicesJson, page,
                                pageSize);
                        });
                }
            }, 100);
    };

    $scope.setPagingData = function (data, page, pageSize) {
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.servicesData = pagedData;
        $scope.pagingOptions.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize,
        $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function () {
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize,
            $scope.pagingOptions.currentPage,
            $scope.filterOptions.filterText);
    }, true);
    $scope.$watch('filterOptions', function () {
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize,
            $scope.pagingOptions.currentPage,
            $scope.filterOptions.filterText);
    }, true);

    $scope.mySelections = [];

    $scope.serviceName = "";
    $scope.url = "";

    $scope.gridOptions = {
        canSelectRows: true,
        multiSelect: false,
        jqueryUITheme: true,
        displaySelectionCheckbox: false,
        data: 'servicesData',
        selectedItems: $scope.mySelections,
        enablePaging: true,
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
}



var playground = myApp.controller('PlaygroundCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        // add service name to the scope...
        $scope.widgetName = $routeParams.widgetName;
        $scope.widgetUrl = "playground/" + $routeParams.widgetName + ".html"
        // tree support
        $scope.deleteNode = function (data) {
            data.nodes = [];
        };
        $scope.addNode = function (data) {
            var post = data.nodes.length + 1;
            var newName = data.name + '-' + post;
            data.nodes.push({name: newName, nodes: []});
        };
        $scope.tree = [
            {name: "Node", nodes: []}
        ];


        // data grid
        createDataGrid($scope, $http, 'playground/emp.json');

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        // date
        $scope.date2 = null;

        $scope.addChild = function () {
            $scope.events.push({
                title: 'Open Sesame',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29)
            });
        }

        $scope.remove = function (index) {
            $scope.events.splice(index, 1);
        }

        // alerts (angular ui)
        $scope.alertSet = [
            { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addToAlertSet = function () {
            $scope.alertSet.push({msg: "Another alert!"});
        };

        $scope.closeTheAlert = function (index) {
            $scope.alertSet.splice(index, 1);
        };

        // angularstrap
        $scope.modal2 = {content: 'Hello Modal', saved: false};
        $scope.tooltip = {title: "Hello Tooltip<br />This is a multiline message!", checked: false};
        $scope.popover = {content: "Hello Popover<br />This is a multiline message!", saved: false};
        $scope.alerts = [
            {type: 'success', title: 'Hello!', content: 'This is a success msg.<br><br><pre>2 + 3 = {{ 2 + 3 }}</pre>'}
        ];
        $scope.addAlert = function (type) {
            $scope.alerts.push({type: type, title: 'Alert!', content: 'This is another alert...'});
        };
        $scope.button = {active: true};
        $scope.buttonSelect = {price: '89,99', currency: 'â‚¬'};
        $scope.checkbox = {left: false, middle: true, right: false};
        $scope.radio = {left: false, middle: true, right: false};
        $scope.radioValue = 'middle';
        $scope.typeahead = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
        $scope.datepicker = {dateStrap: '12/12/2012'};
        $scope.timepicker = {timeStrap: '05:30 PM'};

        $scope.prettyPrint = function () {
            window.prettyPrint && window.prettyPrint();
        }

        

        // form validation and binding
        $scope.master = "";

        $scope.saveForm = function (user) {
            console.log("User..." + $scope.user);
            $scope.master = user;
        }

        // carousel
        $scope.slides = [
            {"image": "http://cdn-static.zdnet.com/i/r/story/70/00/004209/original/raspberry-pi-supercomputer-1-620x465.jpg?hash=AQx4MwRjZG", "text": "foo", "active": true},
            {"image": "http://www.rubberrepublic.com/wp-content/uploads/2011/09/lolcat-funny-picture-moderator1.jpg", "text": "bar", "active": false},
            {"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Composition_of_38th_Parliament.png/220px-Composition_of_38th_Parliament.png", "text": "moo", "active": false}
        ]


    }])
    ;

