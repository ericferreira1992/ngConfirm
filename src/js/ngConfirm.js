/*!
 * ngConfirm v1.0.0
 * Copyright 2016 Eric Ferreira
 * Contato: ericferreira1992@gmail.com
 */

(function() {
    'use strict';

    angular.module('ngConfirm', [], function(){});
    angular.module('ngConfirm').factory('ngConfirmFactory', function ($rootScope, $timeout, $compile) {
        var getTemplate = function(){
            return ''+
                '<div class="ng-confirm-geral" ng-class="{\'ng-confirm-in\': modalShow, \'ng-confirm-out\': !modalShow}" id="ng-confirm-1">'+
                    '<div class="ng-confirm-area">'+
                        '<div class="ng-confirm-container">'+
                            '<header>Confirmação</header>'+
                            '<section>{{msgConfirmacao}}</section>'+
                            '<div>'+
                                '<button ng-click="cancelarBtn()">{{cancelarBtnLabel}}</button>'+
                                '<button ng-click="okBtn()">{{okBtnLabel}}</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        };

        var showConfirmacao = function(scope){
            var modal = getTemplate();
            angular.element(document.body).prepend(modal);

            $compile(angular.element(document.querySelector('#ng-confirm-1')))(scope);

            if(!scope instanceof $rootScope.constructor) scope.$apply();
        };

        var closeConfirmacao = function (scope) {
            scope.modalShow = false;
            $timeout(function () {
                angular.element(document.querySelector('#ng-confirm-1')).remove();
                if(!scope instanceof $rootScope.constructor) scope.$apply();
            }, 200);
        };

        return {
            startFromService: function (msg, acaoSim, acaoNao) {
                var scope = $rootScope.$new();

                /* ------ Funcionalidades ------ */
                scope.okBtn = function () {
                    acaoSim();
                    closeConfirmacao(scope);
                };
                scope.cancelarBtn = function () {
                    if(typeof acaoNao == 'function') acaoNao();
                    closeConfirmacao(scope);
                };

                scope.inicializa = function () {
                    scope.modalShow = true;
                    scope.msgConfirmacao = msg;
                    scope.okBtnLabel = 'Sim';
                    scope.cancelarBtnLabel = 'Não';

                    showConfirmacao(scope);
                };

                scope.inicializa();
            },

            startFromDirective: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    event.stopImmediatePropagation();
                    scope.inicializa();
                });

                /* ------ Funcionalidades ------ */
                scope.okBtn = function () {
                    scope.ngClick();
                    closeConfirmacao(scope);
                };
                scope.cancelarBtn = function () {
                    closeConfirmacao(scope);
                };

                scope.inicializa = function () {
                    scope.modalShow = true;
                    scope.msgConfirmacao = attrs.ngConfirm != undefined ? attrs.ngConfirm : 'Tem certeza que deseja prosseguir?';
                    scope.okBtnLabel = attrs.okBtn != undefined ? attrs.okBtn : 'Sim';
                    scope.cancelarBtnLabel = attrs.cancelBtn != undefined ? attrs.cancelBtn : 'Não';

                    showConfirmacao(scope);
                };
            }
        };
    });
    angular.module('ngConfirm').directive('ngConfirm', function (ngConfirmFactory) {
        return {
            restrict: 'A',
            scope: {
                ngClick: '&ngClick'
            },
            link: ngConfirmFactory.startFromDirective
        }
    });
    angular.module('ngConfirm').service('ngConfirm', function(ngConfirmFactory){
        return {
            confirm: ngConfirmFactory.startFromService
        };
    });
})();