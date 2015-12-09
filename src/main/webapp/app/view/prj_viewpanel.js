
Ext.define('App.view.prj_viewpanel', {
    extend: 'Ext.container.Viewport',

    requires: [
        'App.view.prj_treepanel',
        'App.view.prj_overview.detail',
        'Ext.tree.Panel'
    ],

    id: 'globalViewPanel',
    layout: 'border',
    width: 1024,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'prjTreePanel',
                    width: 280,
                    bodyBorder: true,
                    title: '项目统计',
                    region: 'west'
                },
                {
                    xtype: 'detailForm',
                    region: 'center',
                    bodyBorder: true
                }
            ]
        });

        me.callParent(arguments);
    }

});