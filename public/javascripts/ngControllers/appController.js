//Create me controller
angular.module('hollandDemo').controller('mainCtrl', function(mainFty) {

    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    }

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    }

    this.viewfooterdatas = function() {
        return mainFty.getData();
    }
})

