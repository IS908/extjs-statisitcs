/**
 * Created by kevin on 12/8/15.
 */

Ext.define('App.view.prj_statistic.statisticsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sumGrid',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.View',
    ],

    header: false,
    title: '误漏报统计',
    store: 'statisticsInfo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ruleId',
                    text: '规则编号',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'ruleDes',
                    text: '规则描述',
                    width: 180
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'cobotCount',
                    text: 'cobot总数',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'right',
                    text: '正确个数',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'wrong',
                    text: '误报数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'miss',
                    text: '漏报数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'kwCount',
                    text: 'kw总数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'kwRight',
                    text: '正确个数',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'kwWrong',
                    text: '误报数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'kwMiss',
                    text: '漏报数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'covCount',
                    text: 'coverity总数',
                    width: 80
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'covRight',
                    text: '正确个数',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'covWrong',
                    text: '误报数',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'covMiss',
                    text: '漏报数',
                    width: 50
                }/*, {
                    xtype: 'gridcolumn',
                    text: '编辑',
                    //icon: '',
                    renderer: function() {
                        return '增/删/改';
                    },
                    /!*editRenderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                    },
                    items: [
                        {

                        }
                    ],*!/
                    width: 60
                }*/
            ]
        });

        me.callParent(arguments);
    }

});