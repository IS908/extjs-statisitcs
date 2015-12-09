
Ext.define('App.view.prj_searchBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.searchBar',

    requires: [
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    width: 235,
                    fieldLabel: '项目搜索',
                    labelWidth: 60
                },
                {
                    xtype: 'button',
                    text: '搜索'
                }
            ]
        });

        me.callParent(arguments);
    }

});