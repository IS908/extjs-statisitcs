/**
 * Created by kevin on 12/9/15.
 */


Ext.define('App.view.prj_treeList.addProject', {
    extend: 'Ext.window.Window',
    alias: 'widget.prjAdd',


    width: 260,
    height: 220,
    id: 'addPrj',
    autoScroll: true,
    layout: 'border',
    border: false,
    title: '添加项目',
    //html: '<iframe style="overflow:auto;width:100%; height:100%;" src="http://www.baidu.com" frameborder="0"></iframe>'

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    margin: '15 0 0 15',
                    border: false,
                    items: [
                        {
                            xtype: 'textfield',
                            border: false,
                            fieldLabel: '工程名称',
                            labelAlign: 'right',
                            labelWidth: 70
                        }, {
                            xtype: 'textfield',
                            border: false,
                            fieldLabel: '工程版本',
                            labelAlign: 'right',
                            labelWidth: 70
                        }, {
                            xtype: 'textfield',
                            border: false,
                            fieldLabel: '代码行数',
                            labelAlign: 'right',
                            labelWidth: 70
                        }, {
                            xtype: 'textfield',
                            border: false,
                            fieldLabel: '代码活跃度',
                            labelAlign: 'right',
                            labelWidth: 70
                        }, {
                            xtype: 'textfield',
                            border: false,
                            fieldLabel: '源码地址',
                            labelAlign: 'right',
                            labelWidth: 70
                        }
                    ]}
            ],
            buttons: [{
                text: '确认',
                id: 'btnOK',
                handler: function() {
                    me.close();
                }
            }, {
                text: '关闭',
                id: 'close',
                handler: function() {
                    me.close();
                }
            }]
        });
        me.callParent(arguments);
    }
});