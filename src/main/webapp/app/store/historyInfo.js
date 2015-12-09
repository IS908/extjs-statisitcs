/**
 * Created by kevin on 12/4/15.
 */

Ext.define('App.store.historyInfo', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.cobotHistory',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'App.model.cobotHistory',
            storeId: 'historyStore',
            pageSize: 15,
            proxy: {
                type: 'ajax',
                url: 'data/historyData.json',
                reader: {
                    type: 'json',
                    root: 'data',
                    totalProperty: 'count'
                }
            }
        }, cfg)]);
    }
});