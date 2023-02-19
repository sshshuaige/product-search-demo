var arr = [
    {
        id:1,
        name:'小米',
        price:3999
    },
    {
        id:2,
        name:'苹果',
        price:8999
    },
    {
        id:3,
        name:'华为',
        price:5999
    },
    {
        id:4,
        name:'红米',
        price:1999
    }
]
//获取元素
var tbody = document.querySelector('tbody')
var start = document.querySelector('.start')
var end = document.querySelector('.end')
var btn_price = document.querySelector('.search_price')
var btn_name = document.querySelector('.search_name')
var pname = document.querySelector('.pname')
setDate(arr)

//遍历动态生成表格
function setDate(myArr) {
    //每次动态生成之前清空表格
    tbody.innerHTML = ''
    myArr.forEach(function(value){
        var tr = document.createElement('tr')
        tr.innerHTML = '<td>'+value.id+'</td><td>'+value.name+'</td><td>'+value.price+'</td>'
        tbody.appendChild(tr)})
}
    
//利用价格查询商品       
btn_price.addEventListener('click', function(){
    var newArr = arr.filter(function(value){
        return value.price > start.value && value.price < end.value  
    })
    // console.log(newArr);
    setDate(newArr)
})

//利用名字查询商品
btn_name.addEventListener('click',function(){
    var nameArr = []
    arr.some(function(value){
        if(value.name == pname.value){
            //arr.push()方法可以把数据放进数组中
            nameArr.push(value)
            return true
        }
    })
    // console.log(nameArr);
    setDate(nameArr)
})