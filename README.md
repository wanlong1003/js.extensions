# js.extensions
javascript 内置对象的扩展

优点：
使用方便,直接通过对象调用，不用再创建对象

缺点：
会污染js内置对象，可能和其他js框架冲突。
仅支持ES5及以上版本的浏览器

# 扩展内容
### Object
* IsFunction  是否为函数
* IsArray  是否为数组
* IsNumber  是否为数字
* IsString  是否为字符串
* IsBoolean  是否为布尔类型
* IsObject  是否为object
* Clone  返回对象副本
* ToJson  转化为json字符串
* Extend  合并对象

### String
* IsNullOrEmpty  是否为空
* IsNullOrWhitespace  是否为空或空字符串
* IsEmail  是否为Email
* IsURL  是否为Url字符串
* ToObject  Json字符串转化为js对象

### Date
* ToString  转化为指定格式的字符串
* AddYears  年份数加上指定值
* AddMonths   月份数加上指定值
* AddDays   日期加上指定天数
* AddHours  小时数加上指定值
* AddMinutes  分钟数加上指定值
* AddSeconds  秒数加上指定值
* AddMilliseconds  毫秒数加上指定值

### Array
* All  数组中所有元素是否都满足条件
* Any  数组中是否有满足条件的项
* Clone  创建一个数组副本
* Remove  删除数组中匹配的元素
* First  返回数组中的第一个匹配元素
* Last  返回数组中的最后一个匹配元素
* Where  返回所有符合条件的元素
* OrderBy 对数组进行升序排序
* OrderByDescending 对数组进行降序排序
* Select 将数组中的每个元素投影到数组中
* Skip  跳过数组中指定数量的元素，然后返回剩余的元素
* Take  从数组的开头返回指定数量的元素
* Max  返回数组中的最大值
* Min  返回数组中的最小值
* Sum  返回指定属性的总和
* Average  返回指定属性的平均值


# 示例
### Object
```
var p1 = {name:"lilei",age:18,phone:130000000};

//克隆对象
var p2 = p1.Clone();
```

### String
```
//判断一个字符串是否为有效的邮箱地址
var isEmail = "123@163.com".IsEmail();
```

### Date
```
var d= new Date();

//返回40天之前的日期
var d1 = d.AddDays(-40);

//格式化输出
d.ToString("yyyy-MM-dd");
```

### Array
```
var arr = [
    {name:"lilei",age:18,phone:"1300000000"},
    {name:"wangdan",age:20,phone:"13588888888"},
    {name:"shuapen",age:25,phone:"15399999999"},
    {name:"liyi",age:14,phone:"18788888888"}
];

//所有人的姓名
var names = arr.Select(d=>d.name);

//平均年龄
var avg = arr.Average(d=>d.age);

//查询年龄小于20岁的人
var ps = arr.Where(d=>d.age<20);
```