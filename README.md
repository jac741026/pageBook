```
//要控制的頁面array
var pages=[
  {
    pageName:"頁面ID(string)",
    init:function(){
      //如果goPage或back有init:true參數，開啟頁面前會先執行這邊
    }

  }
]
var pb = new pageBook(pages,'d-none',function(){
  //最後一頁再退要做甚麼
}
```