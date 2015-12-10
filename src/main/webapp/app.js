
// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    requires: [
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
    models: [
        'tree',
		'detailModel',
        'cobotHistory',
        'statistics',
        'weakness'
    ],
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
    controllers: [
        'mycontroller'
    ],
    name: 'App',

    launch: function() {
        Ext.create('App.view.prj_viewpanel');
    }

});
