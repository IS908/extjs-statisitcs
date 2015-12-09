/**
 * Created by kevin on 12/4/15.
 */

Ext.define('App.model.cobotHistory', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'version'
        },
        {
            name: 'testCount'
        },
        {
            name: 'testdate'
        },
        {
            name: 'testRes'
        },
        {
            name: 'false_missing'
        },{
            name: 'historyView'
        }
    ]
});
