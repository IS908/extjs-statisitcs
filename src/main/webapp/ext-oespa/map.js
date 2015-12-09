/** 
 * @author zhuhl
 * @date 20140425
 * 
 * *********  操作实例  ************** 
 *   var map = new HashMap(); 
 *   map.put("key1","Value1"); 
 *   map.put("key2","Value2"); 
 *   map.put("key3","Value3"); 
 *   map.put("key4","Value4"); 
 *   map.put("key5","Value5"); 
 *   alert("size："+map.size()+" key1："+map.get("key1")); 
 *   map.remove("key1"); 
 *   map.put("key3","newValue"); 
 *   var values = map.values(); 
 *   for(var i in values){ 
 *       document.write(i+"："+values[i]+"   "); 
 *   } 
 *   document.write("<br>"); 
 *   var keySet = map.keySet(); 
 *   for(var i in keySet){ 
 *       document.write(i+"："+keySet[i]+"  "); 
 *   } 
 *   alert(map.isEmpty()); 
 */

function HashMap() {
	//定义长度   
	var length = 0;
	//创建一个对象   
	var obj = new Object();

	/** 
	 * 判断Map是否为空 
	 */
	this.isEmpty = function() {
		return length == 0;
	};

	/** 
	 * 判断对象中是否包含给定Key 
	 */
	this.containsKey = function(key) {
		return (key in obj);
	};

	/** 
	 * 判断对象中是否包含给定的Value 
	 */
	this.containsValue = function(value) {
		for ( var key in obj) {
			if (obj[key] == value) {
				return true;
			}
		}
		return false;
	};

	/** 
	 *向map中添加数据 
	 */
	this.put = function(key, value) {
		if (!this.containsKey(key)) {
			length++;
		}
		obj[key] = value;
	};

	/** 
	 * 根据给定的Key获得Value 
	 */
	this.get = function(key) {
		return this.containsKey(key) ? obj[key] : null;
	};

	/** 
	 * 根据给定的Key删除一个值 
	 */
	this.remove = function(key) {
		if (this.containsKey(key) && (delete obj[key])) {
			length--;
		}
	};

	/** 
	 * 获得Map中的所有Value 
	 */
	this.values = function() {
		var _values = new Array();
		for ( var key in obj) {
			_values.push(obj[key]);
		}
		return _values;
	};

	/** 
	 * 获得Map中的所有Key 
	 */
	this.keySet = function() {
		var _keys = new Array();
		for ( var key in obj) {
			_keys.push(key);
		}
		return _keys;
	};

	/** 
	 * 获得Map的长度 
	 */
	this.size = function() {
		return length;
	};

	/** 
	 * 清空Map 
	 */
	this.clear = function() {
		length = 0;
		obj = new Object();
	};
}

function TreeNode(){

}

var findChild = function(node){
//	如过查到节点相等
	var data=[];
	data = eachChild(node,data);
	return data;
};
var eachChild = function (node,data){
	if(node.childNodes.length!=0 ){
		for(var i=0;i<node.childNodes.length;i++){
			data = eachChild(node.childNodes[i],data);
			var c_node = node.childNodes[i];
			if(!Ext.isEmpty(c_node.get("categoryId"))){
				data.push(c_node);
			}
		}
	}
	return data;
};


function HashSet() {

	private: this.map = new HashMap();
	this.ZERO = new Integer(0);

	function HashIterator(it) {
		this.it = it;

		this.hasNext = hasNext;
		function hasNext() {
			return this.it.hasNext();
		}

		this.next = next;
		function next() {
			return this.it.next().getKey();
		}
	}

	public: this.size = size;
	function size() {
		return this.map.size();
	}

	this.isEmpty = isEmpty;
	function isEmpty() {
		return this.map.isEmpty();
	}

	this.contains = contains;
	function contains(o) {
		return this.map.containsKey(o);
	}

	this.add = add;
	function add(o) {
		return this.map.put(o, this.ZERO) == null;
	}

	this.addAll = addAll;
	function addAll(set) {
		var mod = false;
		for (var it = set.iterator(); it.hasNext();) {
			if (this.add(it.next()))
				mod = true;
		}
		return mod;
	}

	this.remove = remove;
	function remove(o) {
		return this.map.remove(o).equals(this.ZERO);
	}

	this.clear = clear;
	function clear() {
		this.map.clear();
	}

	this.iterator = iterator;
	function iterator() {
		return new HashIterator(this.map.iterator());
	}

	this.equals = equals;
	function equals(o) {
		if (o.size() != this.size())
			return false;
		for (var it = this.iterator(); it.hasNext();) {
			if (!o.contains(it.next()))
				return false;
		}
		return true;
	}

	this.hashCode = hashCode;
	function hashCode() {
		var h = 0;
		for (var it = this.iterator(); it.hasNext();) {
			h += it.next().hashCode();
		}
		return h;
	}

	this.toArray = toArray;
	function toArray() {
		var arr = new Array();
		var i = 0;
		for (var it = this.iterator(); it.hasNext();) {
			arr[i++] = it.next();
		}
		return arr;
	}

}