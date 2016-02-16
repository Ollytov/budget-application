'use strict';

angular.module('budgetApplicationApp.auth', [
  'budgetApplicationApp.constants',
  'budgetApplicationApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
