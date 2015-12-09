/**
 * Created by kevin on 12/7/15.
 */

Ext.define('App.store.detailInfo', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.detailModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'App.model.detailModel',
            storeId: 'detail',
            proxy: {
                type: 'ajax',
                url: 'data/detailData.json',
                reader: {
                    type: 'json',
                }
            }
        }, cfg)]);

    }
});