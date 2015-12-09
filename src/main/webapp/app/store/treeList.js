
Ext.define('App.store.treeList', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'App.model.tree',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'App.model.tree',
            storeId: 'treeStore',
            proxy: {
                type: 'ajax',
                url: 'data/treeData.json',
                reader: {
                    type: 'json',
                }
            },

        }, cfg)]);
    }
});