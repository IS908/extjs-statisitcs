/**
 * Created by kevin on 12/8/15.
 */

Ext.define('App.model.weakness', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        }, {
            name: 'path'
        }, {
            name: 'rowNumber'
        }, {
            name: 'ruleId'
        }, {
            name: 'ruleInfo'
        }, {
            name: 'judge'
        }, {
            name: 'comment'
        }
    ]
});