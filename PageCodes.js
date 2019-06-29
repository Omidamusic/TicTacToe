async function DrawGamePad()
{
    // ایتدا طول و عرض کانئاس را با توجه به عرض صفحه نمایش ست میکنیم
    var GamepadWidth =0;
    if(window.innerWidth<992)
    GamepadWidth = window.innerWidth;
    else
    GamepadWidth = window.innerWidth/2;
    document.getElementById('Gamepad').setAttribute('width',GamepadWidth.toString());
    document.getElementById('Gamepad').setAttribute('height',GamepadWidth.toString());
    //از اینجا به بعد چهار خط شامل دو خط افقی و دو خط عمودی در کانواس رسم میشوند و زمین بازی را تشکیل میدهند
    var Gamepad = document.getElementById("Gamepad");
    var ctx = Gamepad.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff"
    ctx.beginPath();
    ctx.moveTo(GamepadWidth/3, 0);
    ctx.lineTo(GamepadWidth/3, GamepadWidth);
    ctx.moveTo(GamepadWidth*2/3,0);
    ctx.lineTo(GamepadWidth*2/3,GamepadWidth);
    ctx.moveTo(0,GamepadWidth/3);
    ctx.lineTo(GamepadWidth,GamepadWidth/3);
    ctx.moveTo(0,GamepadWidth*2/3);
    ctx.lineTo(GamepadWidth,GamepadWidth*2/3);
    ctx.stroke(); 
   
   
  
}
//دو متغیر گلوبال داریم که مکان هایی که تا به حال توسط مکس و مین پر شده اند را داخل خود نگه میدارند
var maxpositions=[8]; //اولین حرکت را برای مکس هشت گذاشتیم
var minpositions=[];
function UpdateGamepad(State)
{
    //این تابع زمین بازی را با توجه به مکان های مکس و مین ریفرش میکند
    maxpositions = State.Maxpositions;
    minpositions = State.Minpositions;
    for(var i = 0;i<minpositions.length;i++)
    {
        DrawMin(minpositions[i]);
    }
    for(var i = 0;i<maxpositions.length;i++)
    {
        DrawMax(maxpositions[i]);
    }
}
function DrawMax(index)
{
    // این تابع یک ایکس را با ایندکسی که میگیرد رسم میکند را رسم میکند
    var centercoordinates = [0,0];
    var Gamepad = document.getElementById("Gamepad");
    if(window.innerWidth<992)
    width = window.innerWidth;
    else
    width = window.innerWidth/2;
    // این ایف ها مرکز ایکسی که باید رسم شود را پیدا میکنند
    if(index == 1)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width/6;
    }
    if(index == 2)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width/6;
    }
    if(index == 3)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width/6;
    }
    if(index == 4)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 5)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 6)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 7)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width*5/6;
    }
    if(index == 8)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width*5/6;
    }
    if(index == 9)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width*5/6;
    }
    //console.log(centercoordinates);
    //Now We Sould Just Draw
    //این قسمت به پایین ایکس را با توجه به مختصات مرکزش رسم میکند که شامل دو خط مورب است
    var ctx = Gamepad.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff"
    ctx.beginPath();
    ctx.moveTo(centercoordinates[0]-width/9,centercoordinates[1]-width/9 );
    ctx.lineTo(centercoordinates[0]+width/9,centercoordinates[1]+width/9);
    ctx.moveTo(centercoordinates[0]+width/9,centercoordinates[1]-width/9 );
    ctx.lineTo(centercoordinates[0]-width/9,centercoordinates[1]+width/9);
    ctx.stroke(); 

}
function DrawMin(index)
{
    // این تابع یک او را با ایندکسی که میگیرد رسم میکند را رسم میکند
    var centercoordinates = [0,0];
    var Gamepad = document.getElementById("Gamepad");
    if(window.innerWidth<992)
    width = window.innerWidth;
    else
    width = window.innerWidth/2;
    // این ایف ها مرکز اویی که باید رسم شود را پیدا میکنند
    if(index == 1)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width/6;
    }
    if(index == 2)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width/6;
    }
    if(index == 3)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width/6;
    }
    if(index == 4)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 5)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 6)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width*3/6;
    }
    if(index == 7)
    {
        centercoordinates[0]=width/6;
        centercoordinates[1]=width*5/6;
    }
    if(index == 8)
    {
        centercoordinates[0]=width*3/6;
        centercoordinates[1]=width*5/6;
    }
    if(index == 9)
    {
        centercoordinates[0]=width*5/6;
        centercoordinates[1]=width*5/6;
    }
     //این قسمت به پایین او را با توجه به مختصات مرکزش رسم میکند که شامل دو خط مورب است
    //Now We Sould Just Draw
    var ctx = Gamepad.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff"
    ctx.beginPath();
    ctx.arc(centercoordinates[0], centercoordinates[1], width/9, 0, 2 * Math.PI, false);
    ctx.stroke(); 

}
