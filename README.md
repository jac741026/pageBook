# 開始
```
var page_array = [
  {
    pageName:"p1",
    reset:function(){
        console.log("p1-reset")
    },
    
  },
  {
    pageName:"p2",
    reset:function(){
        console.log("p2-reset")
    },
    
  },  
  {
    pageName:"p3",
    reset:function(){
        console.log("p3-reset")
    },
    
  }  
]
var hideClassName_string = 'hide'
var pb = new pageBook(page_array,hideClassName_string)


```
# 功能

## 切換頁面
```
pb.go(pageId,config_obj)
```
#### pageId：頁面的Id

#### config_obj：其他參數
|參數|可輸入值|預設值|說明
|---|--------|-----|---|
|reset|true/false|false|換頁時要不要執行該頁面reset() function|

## 上一頁

```
pb.back()
```