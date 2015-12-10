/**
 * Created by kevin on 12/10/15.
 */

Ext.define('App.view.prj_statistic.addStatistics', {
    extend: 'Ext.window.Window',
    alias: 'widget.statisticsAdd',

    width: 400,
    height: 300,
    id: 'addStatis',
    autoScroll: true,
    layout: 'border',
    border: false,
    title: '添加统计信息',

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            modal: true,

            items: [{
                xtype: 'form',
                margin: '15 0 0 15',
                border: false,
                items: [{
                    xtype: 'textfield',
                    border: false,
                    fieldLabel: '规则编号',
                    labelAlign: 'right',
                    labelWidth: 70
                }, {
                    xtype: 'textfield',
                    border: false,
                    fieldLabel: '规则描述',
                    labelAlign: 'right',
                    labelWidth: 70
                }, {
                    xtype: 'textfield',
                    border: false,
                    fieldLabel: '库博总数',
                    labelAlign: 'right',
                    labelWidth: 70
                }, {
                    xtype: 'textfield',
                    border: false,
                    fieldLabel: '正确个数',
                    labelAlign: 'right',
                    labelWidth: 70
                }, {
                    xtype: 'textfield',
                    border: false,
                    fieldLabel: '误报数',
                    labelAlign: 'right',
                    labelWidth: 70
                }                                                                                ]
            }],

            button: [{
                text: '确认',
                id: 'btnEnter',
                handler: function () {
                    me.close();
                }
            }, {
                text: '关闭',
                id: 'close',
                handler: function () {
                    me.close();
                }
            }]
        });

        me.callParent(arguments);
    }

});