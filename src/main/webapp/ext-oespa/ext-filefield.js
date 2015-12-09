/** 
 * @des Ext 多文件选择组件  与 文件夹选择组件
 * @author zhuhl
 * @date 20150108
 * 
 */

Ext.define("Ext.form.field.MultiFile", {
    extend: 'Ext.form.field.File',
    alias: ['widget.multifile'],
    value:[],
    buttonOnly: true,
    directory:false,  // 0是多文件选择，1是文件夹选择  仅支持HTML5的浏览器
//    是否显示tips  展示无法使用 
    isTips:false,
//    元素
    tipEl:null,
//   tips元素
    tooltips:null,
    fileEl:null,
    // private
    onRender: function() {
        var me = this,
            inputEl;
        me.callParent(arguments);
        me.createFileInput();
    },
    
    /**
     * @private
     * Creates the file input element. It is inserted into the trigger button component, made
     * invisible, and floated on top of the button's other content so that it will receive the
     * button's clicks.
     */
    createFileInput : function() {
        var me = this;
        fileEl = me.fileInputEl.dom;
//        <input id="multifile-1190-fileInputEl" class="x-form-file-input" type="file" size="1" name="filesupload" multiple="true">
        me.callParent(arguments);
        var fileconfig = {
                multiple:true
        }
        if(me.directory){
        	fileconfig["webkitdirectory"] = me.directory;
        }
        me.fileInputEl.set(fileconfig).on('change', me.onSelectedChange, me);
        if(me.tipEl !=null){
        	me.tipEl.remove();
        }
        me.tipEl =  me.browseButtonWrap.createChild({
          	tag:'span',
          	id:'',
            cls: 'x-btn-inner',
            style:'width:100px;margin-left:30px;',
            html:filesNoSelect
        });
       
    },
    clearTips:function(){
    	var me = this;
    	if(me.tooltips != null){
    		me.tooltips.destroy();
    	}
    },
    filesTips:function(){
    	var me = this;
    	var fileEl = me.fileInputEl.dom;
    	var i = 0;
    	var filelistStr = "";
    	  if (fileEl.files != undefined && fileEl.files != null) {
          	if(fileEl.files.length > 0) {
  	        	for (i=0; i<fileEl.files.length && i<20; i++) {
  	        		filelistStr += fileEl.files[i].name+"</br>";
  	        	}
          	} else {
          		return;
          	}
          	
          } else { // For IE : keep only the filename and not the path
          	return;
          }
		 me.tooltips = new  Ext.create('Ext.tip.ToolTip',{
		     target:me.tipEl,
			 title: '文件列表',
			 width: 200,
			 html: filelistStr,
		     trackMouse: true,
		     listeners:{
		    	show :function(tp, value, eOpts ){
		    		 var fileEl = me.fileInputEl.dom; 
		    		 var i = 0;
	    	    	 var filelistStr = "";
	    	    	 if (fileEl.files != undefined && fileEl.files != null) {
	    	          	if(fileEl.files.length > 0) {
	    	          	} else {
	    	          		me.clearTips();
	    	          	}
	    	          } else { // For IE : keep only the filename and not the path
	    	        		me.clearTips();
	    	          }
		    		 return true;
		        }
		     }
		 });
    },
    onSelectedChange :function(){
    	 var me = this;
    	 me.clearTips();
    	 var fileEl = me.fileInputEl.dom;
    	 if (fileEl.files != undefined && fileEl.files != null) {
    			me.tipEl.setHTML(filesSelected1+"&nbsp;"+fileEl.files.length+"&nbsp;"+filesSelected2);
    			me.filesTips();
    	 } else {
    		me.tipEl.setHTML(filesNoSelect);
    	 }
    }
});
