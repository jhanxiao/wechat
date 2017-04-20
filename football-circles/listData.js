var express=require('express'),
	app=express(),
	data=[
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"},
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"},
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"},
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"},
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"},
	      {src:"../../img/index_0.png",title:"小丸子啊小丸子"}  
    	];

app.get('/page0',function(req,res){
	res.json({list:data})
})

app.get('/page1',function(req,res){
	res.json({list:data})
})
app.get('/page2',function(req,res){
	res.json({list:data})
})

app.listen(1234)