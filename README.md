# pageBook

start
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

pb.go('p1') //show div#p1
pb.go('p2') //show div#p2
pb.go('p3') //show div#p3

pb.back() //show div#p2
pb.back() //show div#p1
```