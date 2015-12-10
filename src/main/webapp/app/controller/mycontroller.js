
Ext.define('App.controller.mycontroller', {
    extend: 'Ext.app.Controller',

    stores: [
        'treeList',
        'detailInfo',
        'historyInfo',
        'statisticsInfo',
        'weaknessInfo'
    ],
    views: [
        'App.view.prj_viewpanel',
        'App.view.prj_treepanel',
        'App.view.prj_treeList.addProject',
        'App.view.prj_searchBar',
        'App.view.prj_overview.detail',
        'App.view.prj_overview.history',
        'App.view.prj_statistic.statisticsWin',
        'App.view.prj_statistic.statisticsGrid',
        'App.view.prj_statistic.addStatistics',
        'App.view.prj_weakness.weaknessGrid'
    ],

    init: function(application) {
        //console.log('测试controller文件是否找到');
        this.control({
            'prjTreePanel' : {      //双击项目统计树元素
                itemdblclick: this.nodeClick
            },
            'history_grid': {       //双击检测历史
                itemdblclick: this.onHistoryItemClick
            },
            'sumGrid' : {           //双击误漏报统计
                itemdblclick: this.getWeaknessDetail
            },

            'prjTreePanel button[id = prj_add]' : { //点击treeList的添加按钮
                click: this.addPrj
            },

            'prjTreePanel button[id = prj_del]' : { //点击treeList的删除按钮
                click: this.addClick
            },

            'detailForm button[id = btnAdd]' : {    //点击detail的添加按钮
                click: this.addClick
            },
            'detailForm button[id = btnReset]' : {    //点击detail的添加按钮
                click: this.addClick
            },
            'detailForm button[id = btnSubmit]' : {    //点击detail的添加按钮
                click: this.addClick
            },

            'prj_statistics button[id = btn_add]' : {   //点击statistics的添加按钮
                click: this.addStatistics
            },

            'prj_statistics button[id = btn_edit]' : {
                //click: this.addPrj
            },

            'prj_statistics button[id = btn_del]' : {
                //click: this.addPrj
            }
        });
    },

    addStatistics: function() {
        var win = Ext.widget('statisticsAdd');
        win.show();
    },

    addPrj: function() {
        var win = Ext.widget('prjAdd');
        win.show();
    },

    testfun: function () {
        console.log("执行了");
    },

    onHistoryItemClick: function(grid, record) {
        //console.log('onHistoryItemClick');
        var win = Ext.widget('prj_statistics');
        win.show();
    },

    getWeaknessDetail: function (grid, record) {
        //console.log('getWeaknessDetail');
        this.getWeaknessInfoStore().load({
            params: {
                name : 'bzip2'
            },
            url: 'data/weakness.json'
        });
    },

    nodeClick: function (view, record) {
        if (record.firstChild == null){
            var win = Ext.getCmp('detailForm');
            var data = this.getStore('detailInfo');
            win.myhandler(win, 'data/detailData.json');

            console.log(record);
            console.log('id:' + record.internalId);
            console.log('name:' + record.data.text);

            this.getHistoryInfoStore().load({
                params: {
                    id: '',
                    name: record.internalId
                },
                url: 'data/historyData.json'
            })
        }
    },

    addClick: function() {
        var win = Ext.getCmp('detailForm');
        var data = this.getStore('detailInfo');
        win.myhandler(win, 'data/detailData.json');
    }

});
