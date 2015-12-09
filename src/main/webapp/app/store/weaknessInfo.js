/**
 * Created by kevin on 12/8/15.
 */

Ext.define('App.store.weaknessInfo', {
    extend: 'Ext.data.Store',

    requires: [
        'App.model.weakness',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'App.model.weakness',
            storeId: 'weaknessStore',
            proxy: {
                type: 'ajax',
                url: 'data/weakness.json',
                reader: {
                    type: 'json',
                    root: 'data',
                }
            }
        }, cfg)]);
    }
});