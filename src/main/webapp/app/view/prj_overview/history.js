
Ext.define('App.view.prj_overview.history', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.history_grid',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.View'
    ],

    title: 'COBOT检测历史',
    store: 'historyInfo',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    //dataIndex: 'id',
                    text: '编号',
                    resizable: false,
                    width: 35
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'version',
                    text: 'COBOT版本',
                    resizable: false,
                    width: 80
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'testCount',
                    text: '缺陷总数',
                    resizable: false,
                    width: 80
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'testdate',
                    text: '检测时间',
                    resizable: false,
                    width: 150
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'testRes',
                    text: '检测结果',
                    resizable: false,
                    width: 150
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'historyView',
                    text: '历史查看',
                    resizable: false,
                    width: 150,
                    /*renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        //console.log(this.title);
                        //return "<a onclick='javascript:this.showWin()'>查看</a></center>";
                    }*/
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'false_missing',
                    text: '误漏报',
                    resizable: false,
                    width: 70,
                    renderer: function() {
                        return "双击查看";
                    }
                }
            ],
            bbar: {
                xtype: 'pagingtoolbar',
                store: this.getStore(),
                displayInfo: true,
                displayMsg: '第 {0} 条至第 {1} 条记录 / 共 {2} 条记录',
                emptyMsg: "暂无记录"
            }
        });

        me.callParent(arguments);
    }

});