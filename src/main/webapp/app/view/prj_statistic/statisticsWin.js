
Ext.define('App.view.prj_statistic.statisticsWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.prj_statistics',

    requires: [
        'App.view.prj_statistic.statisticsGrid',
        'App.view.prj_weakness.weaknessGrid',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.grid.Panel'
    ],

    height: 600,
    width: 950,
    autoScroll: true,
    layout: 'border',
    title: '误漏报统计 & 缺陷详细信息',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        xtype: 'button',
                        text: '添加',
                        id: 'btn_add'
                    }, {
                        xtype: 'button',
                        text: '编辑',
                        id: 'btn_edit'
                    }, {
                        xtype: 'button',
                        text: '删除',
                        id: 'btn_del'
                    }, {
                        xtype: 'label',
                        minWidth: 80,
                    }, {
                        xtype: 'textfield',
                        width: 150,
                        fieldLabel: 'COBOT版本',
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        xtype: 'textfield',
                        width: 150,
                        fieldLabel: '项目名称',
                        labelAlign: 'right',
                        labelWidth: 60
                    }, {
                        xtype: 'textfield',
                        width: 200,
                        fieldLabel: '检测时间',
                        labelAlign: 'right',
                        labelWidth: 60
                    }, {
                        xtype: 'textfield',
                        width: 200,
                        fieldLabel: '缺陷总数',
                        labelAlign: 'right',
                        labelWidth: 70
                    }
                ]}
            ],
            items: [
                {
                    xtype: 'sumGrid',
                    region: 'north',
                    maxHeight: 300,
                }, {
                    xtype: 'weaknessTable',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});