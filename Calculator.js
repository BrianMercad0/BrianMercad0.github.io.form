function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}


function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}