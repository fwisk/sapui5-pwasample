sap.ui.require.preload({
	"offlineApp/offlineApp/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"offlineApp/offlineApp/model/models\"\n], function (UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"offlineApp.offlineApp.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function () {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// enable routing\n\t\t\tthis.getRouter().initialize();\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
	"offlineApp/offlineApp/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function (Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"offlineApp.offlineApp.controller.View1\", {\n\t\tonInit: function () {\n\n\t\t}\n\t});\n});",
	"offlineApp/offlineApp/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function (JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function () {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
	"offlineApp/offlineApp/register-worker.js": "if ('serviceWorker' in navigator) {\r\n\t// load serviceworker after page has been loaded. This ensures a best first-visit\r\n\t// experience.\r\n\t// see here for details:\r\n\t// https://developers.google.com/web/fundamentals/primers/service-workers/registration\r\n\twindow.addEventListener('load', function () {\r\n\t\tnavigator.serviceWorker\r\n\t\t\t.register('./service-worker.js')\r\n\t\t\t.then(function () {\r\n\t\t\t\tconsole.log('Service Worker Registered');\r\n\t\t\t}).catch(function (error) {\r\n\t\t\t\tconsole.log('Service Worker Registration failed');\r\n\t\t\t\tconsole.log(error);\r\n\t\t\t});\r\n\t});\r\n}",
	"offlineApp/offlineApp/service-worker.js": "importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');\r\n// index.html and JavaScript files\r\nworkbox.routing.registerRoute(\r\n\tnew RegExp('(index\\.html|.*\\.js)'),\r\n\t// Fetch from the network, but fall back to cache\r\n\tnew workbox.strategies.NetworkFirst()\r\n);\r\n\r\n// CSS, fonts, i18n\r\nworkbox.routing.registerRoute(\r\n\t/(.*\\.css|.*\\.properties|.*\\.woff2)/,\r\n\t// Use cache but update in the background ASAP\r\n\tnew workbox.strategies.StaleWhileRevalidate({\r\n\t\t// Use a custom cache name\r\n\t\tcacheName: 'asset-cache',\r\n\t})\r\n);",
	"offlineApp/offlineApp/view/View1.view.xml": "<mvc:View controllerName=\"offlineApp.offlineApp.controller.View1\" xmlns:mvc=\"sap.ui.core.mvc\" displayBlock=\"true\" xmlns=\"sap.m\">\n\t<!--<Shell id=\"shell\">-->\n\t<App id=\"app\">\n\t\t<pages>\n\t\t\t<Page id=\"page\" title=\"{i18n>title}\">\n\t\t\t\t<content></content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n\t<!--</Shell>-->\n</mvc:View>",
	"offlineApp/offlineApp/i18n/i18n.properties": "title=Title\nappTitle=offlineApp\nappDescription=App Description",
	"offlineApp/offlineApp/manifest.json": "{\n\t\"_version\": \"1.12.0\",\n\t\"sap.app\": {\n\t\t\"id\": \"offlineApp.offlineApp\",\n\t\t\"type\": \"application\",\n\t\t\"i18n\": \"i18n/i18n.properties\",\n\t\t\"applicationVersion\": {\n\t\t\t\"version\": \"1.0.0\"\n\t\t},\n\t\t\"title\": \"{{appTitle}}\",\n\t\t\"description\": \"{{appDescription}}\",\n\t\t\"sourceTemplate\": {\n\t\t\t\"id\": \"ui5template.basicSAPUI5ApplicationProject\",\n\t\t\t\"version\": \"1.40.12\"\n\t\t}\n\t},\n\t\"sap.ui\": {\n\t\t\"technology\": \"UI5\",\n\t\t\"icons\": {\n\t\t\t\"icon\": \"\",\n\t\t\t\"favIcon\": \"\",\n\t\t\t\"phone\": \"\",\n\t\t\t\"phone@2\": \"\",\n\t\t\t\"tablet\": \"\",\n\t\t\t\"tablet@2\": \"\"\n\t\t},\n\t\t\"deviceTypes\": {\n\t\t\t\"desktop\": true,\n\t\t\t\"tablet\": true,\n\t\t\t\"phone\": true\n\t\t}\n\t},\n\t\"sap.ui5\": {\n\t\t\"flexEnabled\": false,\n\t\t\"rootView\": {\n\t\t\t\"viewName\": \"offlineApp.offlineApp.view.View1\",\n\t\t\t\"type\": \"XML\",\n\t\t\t\"async\": true,\n\t\t\t\"id\": \"View1\"\n\t\t},\n\t\t\"dependencies\": {\n\t\t\t\"minUI5Version\": \"1.65.6\",\n\t\t\t\"libs\": {\n\t\t\t\t\"sap.ui.layout\": {},\n\t\t\t\t\"sap.ui.core\": {},\n\t\t\t\t\"sap.m\": {}\n\t\t\t}\n\t\t},\n\t\t\"contentDensities\": {\n\t\t\t\"compact\": true,\n\t\t\t\"cozy\": true\n\t\t},\n\t\t\"models\": {\n\t\t\t\"i18n\": {\n\t\t\t\t\"type\": \"sap.ui.model.resource.ResourceModel\",\n\t\t\t\t\"settings\": {\n\t\t\t\t\t\"bundleName\": \"offlineApp.offlineApp.i18n.i18n\"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t\"resources\": {\n\t\t\t\"css\": [\n\t\t\t\t{\n\t\t\t\t\t\"uri\": \"css/style.css\"\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t\"routing\": {\n\t\t\t\"config\": {\n\t\t\t\t\"routerClass\": \"sap.m.routing.Router\",\n\t\t\t\t\"viewType\": \"XML\",\n\t\t\t\t\"async\": true,\n\t\t\t\t\"viewPath\": \"offlineApp.offlineApp.view\",\n\t\t\t\t\"controlAggregation\": \"pages\",\n\t\t\t\t\"controlId\": \"app\",\n\t\t\t\t\"clearControlAggregation\": false\n\t\t\t},\n\t\t\t\"routes\": [\n\t\t\t\t{\n\t\t\t\t\t\"name\": \"RouteView1\",\n\t\t\t\t\t\"pattern\": \"RouteView1\",\n\t\t\t\t\t\"target\": [\n\t\t\t\t\t\t\"TargetView1\"\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"targets\": {\n\t\t\t\t\"TargetView1\": {\n\t\t\t\t\t\"viewType\": \"XML\",\n\t\t\t\t\t\"transition\": \"slide\",\n\t\t\t\t\t\"clearControlAggregation\": false,\n\t\t\t\t\t\"viewId\": \"View1\",\n\t\t\t\t\t\"viewName\": \"View1\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t\"sap.platform.abap\": {\n\t\t\"uri\": \"/sap/bc/ui5_ui5/sap/zofflineapp/webapp\",\n\t\t\"_version\": \"1.1.0\"\n\t}\n}"
}, "offlineApp/offlineApp/Component-preload");