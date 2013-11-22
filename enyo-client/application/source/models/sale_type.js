/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, _:true */

(function () {
  "use strict";

  /**
    @class

    @extends XM.Document
  */
  XM.SaleType = XM.Document.extend({
    /** @scope XM.SaleType.prototype */

    documentKey: 'code',

    recordType: 'XM.SaleType'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.SalesEmailProfile = XM.Model.extend({
    /** @scope XM.SalesEmailProfile.prototype */

    recordType: 'XM.SaleType'

  });

  /**
    @class

    @extends XM.CharacteristicAssignment
  */
  XM.SaleTypeCharacteristic = XM.CharacteristicAssignment.extend(/** @lends XM.SaleTypeCharacteristic.prototype */{

    recordType: 'XM.SaleTypeCharacteristic'

  });

  /**
    @class

    @extends XM.WorkflowSource
  */
  XM.SaleTypeWorkflow = XM.WorkflowSource.extend(
    /** @scope XM.SaleTypeWorkflow.prototype */ {

    recordType: 'XM.SaleTypeWorkflow',

    defaults: function () {
      return {
        workflowType: XM.SalesOrderWorkflow.TYPE_OTHER
      };
    }

  });

  // ..........................................................
  // COLLECTIONS
  //

  /**
    @class

    @extends XM.Collection
  */
  XM.SaleTypeCollection = XM.Collection.extend({
    /** @scope XM.SaleTypeCollection.prototype */

    model: XM.SaleType

  });

}());
