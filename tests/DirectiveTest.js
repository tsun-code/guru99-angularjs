describe('Unit testing directives', function () {
    var $compile,
        $rootScope;
    beforeEach(angular.mock.module('sampleApp2'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Check the directive', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile("<ng-guru99></ng-guru99>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("This is AngularJS Testing");
    });
});