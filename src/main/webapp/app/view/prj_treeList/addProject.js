/**
 * Created by kevin on 12/9/15.
 */


Ext.define('App.view.prj_treeList.addProject', {
    extend: 'Ext.window.Window',
    alias: 'widget.prjAdd',


    width: 400,
    height: 300,
    id: 'addPrj',
    autoScroll: true,
    layout: 'fit',
    title: '添加项目',
    //html: '<iframe style="overflow:auto;width:100%; height:100%;" src="http://www.baidu.com" frameborder="0"></iframe>'

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: '工程名称'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '工程版本'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '代码行数'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '代码活跃度'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '源码地址'
                        }
                    ]}
            ],
            buttons: [{
                text: '确认',
                id: 'btnOK'
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