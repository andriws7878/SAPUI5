// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("andriws.SAPUI5.controller.App", {

            onInit: function () {
                
            },

            onShowHello: function () {
                //read text from model i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from dta model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });