/*!
 * Copyright 2018 Webdetails, a Hitachi Vantara company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

/* globals mappedModuleId, modulePath, requireCfg */

requireCfg.map = requireCfg.map || {};
requireCfg.map[mappedModuleId] = requireCfg.map[mappedModuleId] || {};
requireCfg.packages = requireCfg.packages || [];

var moduleMap = requireCfg.map[mappedModuleId];
var isDebug = typeof document === "undefined" || document.location.href.indexOf("debug=true") > 0;

var resourcesPath = modulePath + '/plugin/pentaho-cdf-dd/api/resources';
var componentsPath = resourcesPath + (isDebug ? '/components' : '/components-compressed');

requireCfg.paths['cde/resources'] = resourcesPath;
requireCfg.paths['cde/components'] = componentsPath;
requireCfg.paths['cde/repo'] = resourcesPath + '/public/cde';

var cdeComponents = [
  'PopupComponent',
  'ExportButtonComponent',
  'AjaxRequestComponent',
  'CggComponent',
  'DuplicateComponent',
  'NewSelectorComponent',
  'RaphaelComponent',
  'RelatedContentComponent',
  'SiteMapComponent',
  'ViewManagerComponent',
  'GoogleAnalyticsComponent',
  'DashboardComponent'
];

cdeComponents.forEach(function(component) {
  requireCfg.push({
    name: 'cde/components/' + component,
    location: componentsPath + '/' + component + '/amd',
    main: component
  })
});

// components that share a common package location are mapped to the appropriate subfolder
moduleMap['cde/components/ExportPopupComponent'] = 'cde/components/PopupComponent/ExportPopupComponent';
moduleMap['cde/components/CggDialComponent'] = 'cde/components/CggComponent/CggDialComponent';

requireCfg.map['*'] = moduleMap;
