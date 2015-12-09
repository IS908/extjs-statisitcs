
Ext.define('App.view.prj_treepanel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.prjTreePanel',

    requires: [
        'App.view.prj_searchBar',
        'Ext.tree.View',
        'Ext.toolbar.Toolbar'
    ],

    autoShow: true,
    id: 'treePanel',
    autoScroll: true,
    bodyBorder: false,
    title: '项目列表',
    store: 'treeList',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [{
                xtype: 'searchBar',
                dock: 'top'
            }, {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: '添加',
                        id: 'prj_add'
                    }, {
                        xtype: 'button',
                        text: '删除',
                        id: 'prj_del'
                    }
                ]
            }
            ],
            viewConfig: {
                id: 'treeView',
                autoShow: true,
                autoScroll: true,
                rootVisible: false
            }

        });

        me.callParent(arguments);
    }

});