/**
 * Created by kevin on 12/7/15.
 */

Ext.define('App.model.detailModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [{
        name: 'id'                  //项目id
    }, {
        name: 'name'
    }, {
        name: 'version'
    }, {
        name: 'codeCount'
    }, {
        name: 'testDate'
    }, {
        name: 'weaknessCount'
    }, {
        name: 'liveness'
    }, {
        name: 'srcAddress'
    }, {
        name: 'description'
    }]

});