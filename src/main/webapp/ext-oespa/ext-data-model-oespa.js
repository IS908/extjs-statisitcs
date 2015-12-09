

Ext.namespace("Ext.ux");

Ext.ux.ToastWindowMgr = {
    positions: [] 
};

Ext.ux.ToastWindow = Ext.extend(Ext.Window, {
    initComponent: function(){
          Ext.apply(this, {
            iconCls: this.iconCls || 'information',
            width: 250,
            height: 250,
            autoScroll: true,
            autoDestroy: true,
            plain: false,
            shadow:false
          });
        this.task = new Ext.util.DelayedTask(this.hide, this);
        Ext.ux.ToastWindow.superclass.initComponent.call(this);
    },
    setMessage: function(msg){
        this.body.update(msg);
    },
    setTitle: function(title, iconCls){
        Ext.ux.ToastWindow.superclass.setTitle.call(this, title, iconCls||this.iconCls);
    },
    onRender:function(ct, position) {
        Ext.ux.ToastWindow.superclass.onRender.call(this, ct, position);
    },
    onDestroy: function(){
//        Ext.ux.ToastWindowMgr.positions.remove(this.pos);
        Ext.ux.ToastWindow.superclass.onDestroy.call(this);
    },
    afterShow: function(){
        Ext.ux.ToastWindow.superclass.afterShow.call(this);
//        this.on('move', function(){
//               Ext.ux.ToastWindowMgr.positions.remove(this.pos);
//            this.task.cancel();}
//        , this);
//        this.task.delay(4000);
    },
    animShow: function(){
        this.pos = 0;
        while(Ext.ux.ToastWindowMgr.positions.indexOf(this.pos)>-1)
            this.pos++;
        Ext.ux.ToastWindowMgr.positions.push(this.pos);
        this.setSize(250,150);
        this.el.alignTo(document, "br-br", [ -20, -20-((this.getSize().height+10)*this.pos) ]);
        this.el.slideIn('b', {
            duration: 2,
            callback: this.afterShow,
            scope: this
        });    
    },
    animHide: function(){
           Ext.ux.ToastWindowMgr.positions.remove(this.pos);
        this.el.ghost("b", {
            duration: 2,
            remove: true,
         scope: this,
         callback: this.destroy
        });    
    }
});  

 
var treeStoreLoadSon=function(node,codeChangeTree){
	node.isHalfSelected = false;
	node.eachChild(function(child) { // 循环下一级的所有子节点
		if (null != child.get('checked')) // 这里这么写是因为后台有些节点的checked没赋值，其在web上不显示复选框，这里就过滤掉对它们
		{
			treeStoreLoadSon(child,codeChangeTree)
			if(child.isLast( ) ){
				treeStoreSelectedFather(child,child.get('checked'),codeChangeTree) 
			}
		}
	});
	
}

//递归选子节点
var treeStoreSelectedSon = function(node, checked) {
	// node.expand();
	node.isHalfSelected = false;
	node.eachChild(function(child) { // 循环下一级的所有子节点
		if (null != child.get('checked')) // 这里这么写是因为后台有些节点的checked没赋值，其在web上不显示复选框，这里就过滤掉对它们
		{
			child.set('checked', checked); // 选中
			treeStoreSelectedSon(child, checked); // 递归选中子节点
		}
	});
};

var nnd;
//递归选父节点
var treeStoreSelectedFather = function(node,checked,codeChangeTree) 
{
 var parent = node.parentNode;   // 获取父节点
 var flag = false;           
 var hasUnCheckedChild = false;
 var isHalfSelected = false;
 if (null != parent) { // 是否有子节点
		parent.eachChild(function(child) { // 循环下一级的所有子节点

			if (child.get('checked') == true) {
				flag = true;
				if (child.isHalfSelected) {
					isHalfSelected = true;
				}
			} else if (child.get('checked') == false) {
				hasUnCheckedChild = true;
			}
		});

		parent.set('checked', flag);
		if ((flag && hasUnCheckedChild) || isHalfSelected) {
			parent.isHalfSelected = true;
			setNode(codeChangeTree, parent, true);
		} else {
			parent.isHalfSelected = false;
			setNode(codeChangeTree, parent, false);
		}
		treeStoreSelectedFather(parent, flag, codeChangeTree);

	} 
};

function setNode(tree, node, value) {
	if(node.isRoot()){
		return;
	}
	var checkbox = getCheckbox(tree, node);
	if(typeof(checkbox)=='undefined'){
		return;
	}
	// checkbox.disabled=value;
	// 半选中状态
	if (node.isHalfSelected != null) {
		if (value == true) {
			checkbox.className +=" x-tree-checkbox-in";
		}
		// 取消半选中
		else {
			checkbox.className = checkbox.className.replaceAll('x-tree-checkbox-in', '');
		}
	}
}

function getCheckbox(tree, node) {
	try {
		var td = tree.getView().getNode(node).firstChild.firstChild;
		var checkbox = td.getElementsByTagName('input')[0];
		return checkbox;
	} catch (e) {
//		console.log(e);
	}
}

function setChildStyle(tree, node) {
	if (node.isExpanded()) {
		node.eachChild(function(child) { // 循环下一级的所有子节点
			if (child.isHalfSelected != null) {
				var checkbox = getCheckbox(tree, child);
				// 半选中状态
				if (child.isHalfSelected == true) {
					checkbox.className = 'x-tree-checkbox x-tree-checkbox-in';
					// checkbox.className=checkbox.className.replace('
					// Diy-mask','')+' Diy-mask';
				}
				// 取消半选中
				else {
					checkbox.className = checkbox.className.replace(
							' Diy-mask', '');
				}
				setChildStyle(tree, child);
			}
		});
	}
}

Ext.define('TreeFilter', {
		extend: 'Ext.AbstractPlugin'
        , alias: 'plugin.treefilter'

        , collapseOnClear: true                                                 // collapse all nodes when clearing/resetting the filter
        , allowParentFolders: false                                             // allow nodes not designated as 'leaf' (and their child items) to  be matched by the filter

        , init: function (tree) {
            var me = this;
            me.tree = tree;

            tree.filter = Ext.Function.bind(me.filter, me);
            tree.clearFilter = Ext.Function.bind(me.clearFilter, me);
            tree.filterByAll = Ext.Function.bind(me.filterByAll, me);
        }

        , filter: function (value, property, re,outProperty) {
            var me = this
                , tree = me.tree
                , matches = []                                                  // array of nodes matching the search criteria
                , root = tree.getRootNode()                                     // root node of the tree
                , property = property || ['text']                                // property is optional - will be set to the 'text' propert of the  treeStore record by default
                , re = re || new RegExp(value, "ig")                            // the regExp could be modified to allow for case-sensitive, starts  with, etc.
                , visibleNodes = []                                             // array of nodes matching the search criteria + each parent non-leaf  node up to root
                , outProperty = outProperty || []
                , viewNode;

            if (Ext.isEmpty(value)) {                                           // if the search field is empty
                me.clearFilter();
                return 0;
            }

//            tree.expandAll();                                                   // expand all nodes for the the following iterative routines
            tree.collapseAll()
            // iterate over all nodes in the tree in order to evalute them against the search criteria
            root.cascadeBy(function (node) {
            	for(var  i=0;i<outProperty.length;i++){
	           		 if (node.get(outProperty[i]).toString()=="") {                             // if the node matches the search criteria and is a leaf (could be  modified to searh non-leaf nodes)
	                        return;
	       			 }
            	}
            	for(var  i=0;i<property.length;i++){
            		 if (node.get(property[i]).toString().match(re) != null) {                             // if the node matches the search criteria and is a leaf (could be  modified to searh non-leaf nodes)
                         matches.push(node);                                        // add the node to the matches array
                         break;
        			 }
            	}
            });

            if (me.allowParentFolders === false) {                              // if me.allowParentFolders is false (default) then remove any  non-leaf nodes from the regex match
                Ext.each(matches, function (match) {
                    if (!match.isLeaf()) {
                        Ext.Array.remove(matches, match);
                    }
                });
            }
           
            var parentNodesArr=[];
            function findParentNode(node){
            	var pnode = node.parentNode;
            	if(!pnode.isRoot( ) && !Ext.isEmpty(pnode)){
            		if(!Ext.Array.contains(parentNodesArr, pnode)){
            			parentNodesArr.push(pnode);
            			findParentNode(pnode)
                	}
            	}
            }
            Ext.each(matches, function (item, i, arr) {                         // loop through all matching leaf nodes
            	 item.cascadeBy(function (node) {                            // iterate over its children and set them as visible
            		 findParentNode(node);
                 });
            });
            Ext.each(parentNodesArr, function (item, i, arr) {                         // loop through all matching leaf nodes
            	item.expand();
            });
            Ext.each(matches, function (item, i, arr) {                         // loop through all matching leaf nodes
                root.cascadeBy(function (node) {                                // find each parent node containing the node from the matches array
                    if (node.contains(item) == true) {
                        visibleNodes.push(node);                                // if it's an ancestor of the evaluated node add it to the visibleNodes  array
                    }
                });
                if (me.allowParentFolders === true && !item.isLeaf()) {        // if me.allowParentFolders is true and the item is  a non-leaf item
                    item.cascadeBy(function (node) {                            // iterate over its children and set them as visible
                        visibleNodes.push(node);
                    });
                }
                visibleNodes.push(item);                                        // also add the evaluated node itself to the visibleNodes array
            });

            root.cascadeBy(function (node) {                                    // finally loop to hide/show each node
                viewNode = Ext.fly(tree.getView().getNode(node));               // get the dom element assocaited with each node
                if (viewNode) {                                                 // the first one is undefined ? escape it with a conditional
                    viewNode.setVisibilityMode(Ext.Element.DISPLAY);            // set the visibility mode of the dom node to display (vs offsets)
                    viewNode.setVisible(Ext.Array.contains(visibleNodes, node));
                }
            });
            return matches.length?matches.length:0;
        }
        , clearFilter: function () {
            var me = this
                , tree = this.tree
                , root = tree.getRootNode();

            if (me.collapseOnClear) {
                tree.collapseAll();                                             // collapse the tree nodes
            }
            root.cascadeBy(function (node) {                                    // final loop to hide/show each node
                viewNode = Ext.fly(tree.getView().getNode(node));               // get the dom element assocaited with each node
                if (viewNode) {                                                 // the first one is undefined ? escape it with a conditional and show  all nodes
                    viewNode.show();
                }
            });
        } 
        ,filterByAll: function (propertys,outPropertys) {
    	    var me = this
    	    , tree = me.tree
    	    , matches = []                                                  // array of nodes matching the search criteria
    	    , root = tree.getRootNode()                                     // root node of the tree
    	    , visibleNodes = []                                         // array of nodes matching the search criteria + each parent non-leaf  node up to root
    	    , viewNode
    	    ,outPropertys = outPropertys || []
    	    ,regs={};
    	    
    	for(property in propertys ){
    		if(Ext.isEmpty(propertys[property]) || propertys[property] == null){
    		} else {
    			var regxx = null;
    			if(typeof a == "string"){
    				regxx = propertys[property].trim();
    			} else {
    				regxx = propertys[property];
    			}
        		regs[property] = new RegExp(regxx, "ig");
    		}
    	}
    	
    	function isEmptyObject(obj){
    	    for(var n in obj){
    	    	return false
    	    } 
    	    return true; 
    	}
    	if (isEmptyObject(regs)) {                                           // if the search field is empty
    	    me.clearFilter();
    	    return 0;
    	}
    	
    	tree.expandAll();                                                   // expand all nodes for the the following iterative routines
    	
    	// iterate over all nodes in the tree in order to evalute them against the search criteria
    	root.cascadeBy(function (node) {
    		for(var  i=0;i<outPropertys.length;i++){
          		 if (node.get(outPropertys[i]).toString()=="") {                             // if the node matches the search criteria and is a leaf (could be  modified to searh non-leaf nodes)
                       return;
      			 }
    		}
    		var  isTrue = false;
    		 for(reg in regs ){
    			 isTrue = node.get(reg).toString().match(regs[reg])
    			 if(!isTrue){
    				 break;
    			 }
    	     }
    		 if(isTrue){
    			matches.push(node);
    		 }
    	});
    	
    	if (me.allowParentFolders === false) {                              // if me.allowParentFolders is false (default) then remove any  non-leaf nodes from the regex match
    	    Ext.each(matches, function (match) {
    	        if (!match.isLeaf()) {
    	            Ext.Array.remove(matches, match);
    	        }
    	    });
    	}
    	
    	Ext.each(matches, function (item, i, arr) {                         // loop through all matching leaf nodes
    	    root.cascadeBy(function (node) {                                // find each parent node containing the node from the matches array
    	        if (node.contains(item) == true) {
    	            visibleNodes.push(node);                                // if it's an ancestor of the evaluated node add it to the visibleNodes  array
    	        }
    	    });
    	    if (me.allowParentFolders === true && !item.isLeaf()) {        // if me.allowParentFolders is true and the item is  a non-leaf item
    	        item.cascadeBy(function (node) {                            // iterate over its children and set them as visible
    	            visibleNodes.push(node);
    	        });
    	    }
    	    visibleNodes.push(item);                                        // also add the evaluated node itself to the visibleNodes array
    	});
    	
    	root.cascadeBy(function (node) {                                    // finally loop to hide/show each node
    	    viewNode = Ext.fly(tree.getView().getNode(node));               // get the dom element assocaited with each node
    	    if (viewNode) {                                                 // the first one is undefined ? escape it with a conditional
    	        viewNode.setVisibilityMode(Ext.Element.DISPLAY);            // set the visibility mode of the dom node to display (vs offsets)
    	        viewNode.setVisible(Ext.Array.contains(visibleNodes, node));
    	    }
    	});
    	return matches.length?matches.length:0;
    	}
	}
);

/**
 * 该表单提供对各个元素回车验证并且自定切换到下一个元素功能
 */
Ext.define("Ext.ux.form.Panel",{
	extend:"Ext.form.Panel",
	isValid:function(){
		var isValid = true;
		Ext.Array.each(this.items.items,function(item,index){
			if(!item.isValid()){
				isValid = false;
				item.focus();
				return false;
			}
		});	
		return isValid;
	},
	initComponent:function(){
		var me = this;
		var specialKey = function(field,e,eOpts){
			if (e.getKey() == Ext.EventObject.ENTER) {
				var isValid = true;
				if(!field.isValid()){
					field.focus();
				}else{
					if(me.isValid()) {
						 me.getForm().updateRecord();
					 }
				}
			};
			if(field.old_specialKey){
				field.old_specialKey(field,e,eOpts);
			}
		};
		Ext.Array.each(me.items,function(item,index){
			if(!Ext.isDefined(item.enterChange) || item.enterChange){
				if(item.listeners){
					if(!item.listeners.specialKey){
						item.listeners.specialKey = specialKey;
					}else{
						item.old_specialKey = item.listeners.specialKey;
						item.listeners.specialKey = specialKey;
					}
				}else{
					item.listeners = {specialKey:specialKey};
				}	
			}
		});
		me.callParent(arguments);
	}
});

