/**
 * Created by kevin on 12/7/15.
 */

Ext.define('App.view.prj_overview.detail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detailForm',

    requires: ['Ext.form.FieldSet'],
    id:'detailForm',
    autoScroll: true,
    title: '项目详细信息',
    store: 'App.store.detailInfo',

    myhandler: function (me, dataurl) {
        //console.log("myhandler：");
        //console.log(me);
        me.load({
            type: 'ajax',
            url: dataurl,
            reader: {
                type: 'json',
                root: 'data'
            }
        });
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            width: 1024,
            xtype: "fieldset",
            itemId: 'detailForm',

            items : [{
                items: [{ //隐藏行
                    xtype: 'label', hidden: true, text: 'ID', name: 'id'
                }]
                }, { // 行1
                // 从左往右的布局
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    columnWidth: .5,
                    layout: "form",
                    border: false,
                    maxWidth: 300,
                    items: [{
                        xtype: "textfield",
                        fieldLabel: "项目名称",
                        labelAlign: 'right',
                        name: 'name',
                        readOnly: true
                    }]
                }, {
                    columnWidth: .5,
                    layout: "form",
                    border: false,
                    maxWidth: 200,
                    items: [{
                        xtype: "textfield",
                        name: 'version',
                        fieldLabel: "项目版本",
                        labelAlign: 'right',
                        readOnly: true
                    }]
                }]
            }, {    // 行2
                layout : "column", border: false, margin: '15 0 0 0',
                items : [{
                    columnWidth : .5,
                    layout : "form",
                    border: false,
                    maxWidth: 300,
                    items : [{
                        xtype : "textfield",
                        name: 'codeCount',
                        fieldLabel : "代码行数",
                        labelAlign: 'right',
                    }]
                }, {
                    columnWidth : .5,
                    layout : "form",
                    border: false,
                    maxWidth: 200,
                    items : [{
                        xtype : "textfield",
                        name: 'liveness',
                        fieldLabel : "代码活跃度",
                        labelAlign: 'right'
                    }]
                }]
            }, {    //行3
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    columnWidth : .5,
                    layout : "form",
                    border: false,
                    maxWidth: 300,
                    items : [{
                        xtype : "textfield",
                        name: 'testDate',
                        fieldLabel : "检测时间",
                        labelAlign: 'right'
                    }]
                }, {
                    columnWidth : .5,
                    layout : "form",
                    border: false,
                    maxWidth: 200,
                    items : [{
                        xtype : "textfield",
                        name: 'weaknessCount',
                        dataIndex: 'prj_weaknessCount',
                        fieldLabel : "缺陷个数[最新]",
                        labelAlign: 'right'
                    }]
                }]
            }, {    // 行4 -- klockwork检测结果
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    border: false,
                    items: [{
                        xtype: "filefield",
                        name: 'kw_result',
                        fieldLabel: 'kw检测结果',
                        emptyText: '未选择文件...',
                        anchor: '100%',
                        buttonText: '选择...',
                        labelAlign: 'right',
                        width: 300
                    }]
                }, {
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 20',
                    items: [{
                        xtype: "button",
                        text: '下 载'
                    }]
                }]
            }, {    //行5
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    border: false,
                    items: [{
                        xtype: "filefield",
                        name: 'coverity_result',
                        fieldLabel: 'coverity检测结果',
                        emptyText: '未选择文件...',
                        anchor: '100%',
                        buttonText: '选择...',
                        labelAlign: 'right',
                        width: 300
                    }]
                }, {
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 20',
                    items: [{
                        xtype: "button",
                        text: '下 载'
                    }]
                }]
            }, {    //行6
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    border: false,
                    items: [{
                        xtype: "filefield",
                        name: 'cobot_result',
                        fieldLabel: 'cobot检测结果',
                        emptyText: '未选择文件...',
                        anchor: '100%',
                        buttonText: '选择...',
                        labelAlign: 'right',
                        width: 300
                    }]
                }, {
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 20',
                    items: [{
                        xtype: "button",
                        text: '下 载'
                    }]
                }]
            }, {    //行7 -- 源代码（提供上传、下载的压缩包）
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    border: false,
                    //margin: '0 0 0 35',
                    items: [{
                        xtype: "filefield",
                        name: 'locaddress',
                        fieldLabel: '源码上传',
                        emptyText: '未选择文件...',
                        anchor: '100%',
                        buttonText: '选择...',
                        labelAlign: 'right',
                        width: 300
                    }]
                }, {
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 20',
                    items: [{
                        xtype: "button",
                        text: '下 载'
                    }]
                }]
            }, {    // 行8 -- 源码地址
                layout : "form", border: false, margin: '15 0 0 0',maxWidth: 800,
                items : [{
                    xtype : "textfield",
                    name: 'srcAddress',
                    fieldLabel : "源码地址",
                    labelAlign: 'right'
                }]
            }, {    // 行8 -- 项目描述
                layout : "form", border: false, margin: '15 0 0 0',maxWidth: 800,
                items : [{
                    xtype : "textareafield",
                    name: 'description',
                    fieldLabel : "项目描述",
                    labelAlign: 'right'
                }]
            }, {    // 行8 -- button
                layout: "column", border: false, margin: '15 0 0 0',
                items: [{
                    columnWidth: .5,
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 260',
                    items: [{
                        id: 'btnAdd',
                        xtype: "button",
                        text: '添 加',
                    }]
                }, {
                    columnWidth: .5,
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 80',
                    items: [{
                        id: 'btnReset',
                        xtype: "button",
                        text: '重 置'
                    }]
                }, {
                    columnWidth: .5,
                    border: false,
                    maxWidth: 60,
                    margin: '0 0 0 80',
                    items: [{
                        id: 'btnSubmit',
                        xtype: "button",
                        text: '提 交',
                        /*handler:function(){
                            alert('提交成功');
                        }*/
                    }]
                }]
            }, {    //行9 -- COBOT检测历史
                layout: 'fit', bodyPadding: 10, margin: '20 0 0 20', border: false, maxWidth: 800,
                items: [{
                    xtype: 'history_grid',
                    id: 'history'
                }]
            }]
        });
        me.callParent(arguments);
    }

});

