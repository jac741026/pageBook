
function pageBook (page_array,hideClassName_string){
  this.temp = []
  this.hideClassName_string = hideClassName_string
  this.page_array = page_array
  this.findPageIndex = function(pageName){
    var rt =this.page_array.find(function(obj,i,a){
      return obj.pageName == pageName;
    })
    return rt;
  }
  this.show = function(id){
    var $pageBook = this
    this.page_array.forEach(function(obj){
      document.getElementById(obj.pageName).classList.add($pageBook.hideClassName_string);
    })
    document.getElementById(id).classList.remove($pageBook.hideClassName_string);
  }
}
//依this.temp內容回上一頁
pageBook.prototype.back = function(){
  if (this.temp.length == 1) {
    
  }else{
    this.temp.pop(1);
    var showTempId = this.temp[this.temp.length - 1];
    if(showTempId){
      this.show(showTempId)
    }
  }
}
//直接到某個page_array
pageBook.prototype.go = function(pageId,config_obj){
  var config = config_obj||{reset:false}
  if(config.reset){
    this.findPageIndex(pageId).reset()
  }
  if (this.temp[this.temp.length-1]  == pageId) {
    return;
  }
  this.temp.push(pageId)
  this.show(pageId)
}