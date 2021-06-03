/* eslint-disable no-undef */
//@ts-nocheck
sap.ui.define([
    "andriws/SAPUI5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.model.resource.ReourceModel} ResourceModel
     */
    function (InvoicesFormater, ResourceModel) {

        QUnit.module("Qnvoices Status", {

            beforeEach: function () {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("andriws/SAPUI5" + "/i18n/i18n.properties")
                });
            },

            afterEach: function () {
                this._oResourceModel.destroy();
            }
        });

        QUnit.test("Should return the invoices Status", function(assert) {

            let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._oResourceModel);

            let oViewStub = {
                getModel : oModel
            };

            let oControllerStub = {
                getView : this.stub().returns(oViewStub)
            };

            let fnIsolatedFormater = InvoicesFormater.invoiceStatus.bind(oControllerStub);

            //Assert
            assert.strictEqual(fnIsolatedFormater("A"), "New", "The invoice status for A is correct");
            assert.strictEqual(fnIsolatedFormater("B"), "In Progres", "The invoice status for B is correct");
            assert.strictEqual(fnIsolatedFormater("C"), "Done", "The invoice status for C is correct");
        });
    });