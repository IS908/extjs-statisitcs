/**
 * Created by kevin on 12/8/15.
 */

Ext.define('App.store.statisticsInfo', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.statistics',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'App.model.statistics',
            storeId: 'statisticsStore',
            proxy: {
                type: 'ajax',
                url: 'data/statistics.json',
                reader: {
                    type: 'json',
                    root: 'data',
                }
            }
        }, cfg)]);
    }
});