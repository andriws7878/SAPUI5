// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "andriws/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof sap.ui.Device} Device 
     */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

        return UIComponent.extend("andriws.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //Call init function of th parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set data model on the view
                this.setModel(Models.createRecipient());

                //Set i18n model on the view
                //var i18nModel = new ResourceModel({ bundleName: "andriws.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                //Set the Device odel 
                this.setModel(Models.createDeviceModel(), "device");

                this._helloDialog = new HelloDialog(this.getRootControl());

                //Create the views based onthe url/hash
                this.getRouter().initialize();
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            },

            getContentDensityClass: function () {
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact"
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy"
                }
                return this._sContentDensityClass
            }
        })
    });