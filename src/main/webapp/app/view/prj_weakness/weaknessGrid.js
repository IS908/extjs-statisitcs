/**
 * Created by kevin on 12/8/15.
 */
Ext.define('App.view.prj_weakness.weaknessGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.weaknessTable',

    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.View'
    ],

    header: false,
    title: '误漏报统计',
    store: 'weaknessInfo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: '项目名称',
                    width: 100
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'path',
                    text: '文件路径',
                    width: 200
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'rowNumber',
                    text: '对应行号',
                    width: 60
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'ruleId',
                    text: '规则编号',
                    width: 100
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'ruleInfo',
                    text: '规则描述',
                    width: 200
                }, {
                    xtype: 'booleancolumn',
                    dataIndex: 'judge',
                    text: '判定',
                    width: 50
                }, {
                    xtype: 'gridcolumn',
                    dataIndex: 'comment',
                    text: '备注',
                    width: 200
                }/*, {
                    //xtype: 'actioncolumn',
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