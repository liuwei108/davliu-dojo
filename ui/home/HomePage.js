define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware", // << updated
    "../_global/widget/NavigationWidget",
    "dojo/text!./templates/HomePage.html",
    "dojo/text!./css/HomePage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware, // << updated
    NavigationWidget,
    template,
    css
    ) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware], { // << updated
        request: null,
        router: null,
        session: null,
        templateString: template,
        navigationWidget: null,

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css); // updated
            this.setTitle('Home'); // updated

            this.navigationWidget = new NavigationWidget({
                router: this.router // << updated
            }, this.navigationNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.navigationWidget.startup();
        }
    });
});