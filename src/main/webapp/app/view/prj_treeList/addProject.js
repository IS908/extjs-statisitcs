/**
 * Created by kevin on 12/9/15.
 */


Ext.define('App.view.prj_treeList.addProject', {
    extend: 'Ext.window.Window',
    alias: 'widget.prjAdd',


    height: 300,
    width: 400,
    autoScroll: true,
    layout: 'border',
    title: '添加项目',
    html: '<iframe style="overflow:auto;width:100%; height:100%;" src="http://www.baidu.com" frameborder="0"></iframe>'

    /*initComponent: function() {
        var me = this;

        Ext.applyIf(me, {

            items: [{
                    xtype: 'label',
                    text: 'COBOT版本'
                }]
        });

        me.callParent(arguments);
    }*/

});