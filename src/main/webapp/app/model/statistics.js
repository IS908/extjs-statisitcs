/**
 * Created by kevin on 12/8/15.
 */

Ext.define('App.model.statistics', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'ruleId'
        }, {
            name: 'ruleDes'
        }, {
            name: 'cobotCount'
        }, {
            name: 'right'
        }, {
            name: 'wrong'
        }, {
            name: 'miss'
        }, {
            name: 'kwCount'
        }, {
            name: 'kwRight'
        }, {
            name: 'kwWrong'
        }, {
            name: 'kwMiss'
        }, {
            name: 'covCount'
        }, {
            name: 'covRight'
        }, {
            name: 'covWrong'
        }, {
            name: 'covMiss'
        }
    ]
});