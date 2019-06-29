//تابع کلی مینیمکس را مینویسیم
//این تابع یوتیلیتی مربوط به بودن در استیت را برمیگرداند

function Minimax(State)
{
  

    
   
    try{
        
        return Utility(State)
    }
    catch(err)
    {
        //Do The Things After Catch Block
    }
    //اگر نوبت مجازی مکس باشد 
    //منظور از مجازی این است که این تابع بازگشتی فقط دارد پیشبینی را برای بهترین حرکت انجام میدهد و حرکتی را انجام نمیدهد در واقع
    if(Players(State).IsMaxTurn())
    {
        var ListOfActions = Actions(State); // اکشن های قابل انجام را میگیریم
        var max ;
       // بین همه ی  اکشن ها آن اکشنی را انجام میدهیم که دارای یوتیلیتی بیشتری است
            max = Minimax(Result(State,ListOfActions[0]));
        
        for(var i = 1;i<ListOfActions.length;i++)
        {
            var temp;
           
                temp = Minimax(Result(State,ListOfActions[i]));
           
            
            if(temp >=max)
            {
                max = temp;
            }
        }
        return max;
        // یوتیلیتی مربوط به بیشترین بازگردانده میشود
    }
    if(Players(State).IsMinTurn())
    {
        var ListOfActions = Actions(State);// اکشن های قابل انجام را میگیریم
        var min ;
        // بین همه ی  اکشن ها آن اکشنی را انجام میدهیم که دارای یوتیلیتی کمتری است
            min = Minimax(Result(State,ListOfActions[0]));
       
        for(var i = 1;i<ListOfActions.length;i++)
        {
            var temp;
           
                temp = Minimax(Result(State,ListOfActions[i]));
          
            if(temp <=min)
            {
                min = temp;
            }
        }
        return min;
  // یوتیلیتی مربوط به کمترین بازگردانده میشود
    
    }
    
}
function Players(State)
{
    //بازیکنی که قرار است در این مرحله بازی کند را بازمیگرداند
    if(State.Minpositions.length == State.Maxpositions.length)
    return new Player("MAX");
else return new Player("MIN");
}
//این متغیر گلوبال حالت های نهایی را در خود نگه میدارد
//GLOBAL VARIBLE TERMINAL STATES
var TEREMINALS =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
    
]
function Terminal_Test(State,Utilityobj)
{
    //در این تابع مشخص میکنیم که آیا یک استیت ترمینال هست یا خیر همچنین این تابع یک یوتیلیتی آبجکت به صورت ارجاعی دریافت میکند و مقدار یوتیلیتی را برای این استیت اگر که ترمینال باشد محاسبه میکند
    //positions in array are always sorted
        //First For Max
    //با این حلقه چک میکنیم که آیا حالت های ترمینالی که در متغیر گلوبال داریم با مکس پوزیشن ها مچ هستند یا خیر
       State.Maxpositions.sort()
       State.Minpositions.sort()
    for(var j = 0;j<TEREMINALS.length;j++)
        {
            var counter=0;
            var position = 0;
            for(var k = 0;k<3 && position<State.Maxpositions.length;)
            {
                if(State.Maxpositions[position]==TEREMINALS[j][k])
                {
                    counter++;
                    position++;
                    k++;
                }
                else
                position++;
               // console.log(position);
            }
            if(counter==3)
            {
                Utilityobj.value = 1;
            return true;
            
            }
            
        }
        //Now For Min
    //با این حلقه چک میکنیم که آیا حالت های ترمینالی که در متغیر گلوبال داریم با مین پوزیشن ها مچ هستند یا خیر
        for(var j = 0;j<TEREMINALS.length;j++)
        {
            var counter=0;
            var position = 0;

            for(var k = 0;k<3 && position<State.Minpositions.length;)
            {
                if(State.Minpositions[position]==TEREMINALS[j][k])
                {
                    counter++;
                    position++;
                    k++;
                }
                else
                position++;
            }
            if(counter==3)
            {
                Utilityobj.value = -1;
            return true;
            
            }
            
        }
    //این ایف یعنی حالتی که تساوی شده است و ترمینال است
        if(State.Maxpositions.length + State.Minpositions.length == 9)
        {
            Utilityobj = 0;
        return true;
        }
        return false;
    
}
function Utility(State)
{
    //یوتیلیتی مربوط به یک استیت را برمیگرداند 
    //اگر برگ نباشد اکسپشن میدهد و اگر برگ باشد یا یک و یا منفی یک برمیگرداند
    var obj = { value : 0  }
    if(Terminal_Test(State,obj))
    {
        return obj.value;
    }
    throw "NOTTERMINAL";
}
//variable for debugging
var recursivecounter = 0;
function Result(state,Action)
{
    //با دریافت یک استیت و یک اکشن ... نتیجه ی را که یک استیت هست برمیگرداند
    var resultstate = new State();//استیت جدید را میسازیم
    resultstate.Maxpositions=[];
    resultstate.Minpositions=[];
    for(var i = 0;i<state.Maxpositions.length;i++)
    {
        resultstate.Maxpositions[i]=state.Maxpositions[i];
    }
    for(var i = 0;i<state.Minpositions.length;i++)
    {
        resultstate.Minpositions[i]=state.Minpositions[i];
    }
    //با دو حلقه ی بالا مکس پوزیشن و مین پوزیشن ها را پر میکنیم
    //حالا چک میکنیم که اکشن انجام شده چه عددی را و به کدام آرایه اضافه میکند
    if(Action.ADDNUMBERFORMAX)
    {
        resultstate.Maxpositions[resultstate.Maxpositions.length]=Action.POSITIONTOADD;
    }
    else{
        resultstate.Minpositions[resultstate.Minpositions.length]=Action.POSITIONTOADD;
    }
   
   // console.log(resultstate);
    recursivecounter++;
    // این قسمت برای دیباگ است
    if(recursivecounter ==8000)
    {
        document.getElementById("ptext").innerHTML = "Processing ..."
    }
    //در نهایت استیت ساخته شده را برمیگردانیم
    return resultstate;
}
function Actions(State)
{
    //این تابع اکشن های یک استیت را برمیگرداند
    return State.Actions();
}
//Finally Minimax Decition
 function Minimax_Decition(State)
{
    //این تابع یک حرکت را به ازای تصمیمی که تابع مینیمکس گرفته است انجام میدهد
    if(Players(State).IsMinTurn == true)
    {
        var ListOfActions = Actions(State);
    
    
    
    var minindex = 0;
    var minvalue =  Minimax(Result(State,ListOfActions[0]));
        //تابع مینیمکس را برای همه ی اکشن های قابل انجام فرا میخوانیم و اگر نوبت مکس بود بیشترین و اگر نوبت مین بود کمترین را با میگردانیم
    for( var i = 1;i<ListOfActions.length;i++)
    {
        var temp =  Minimax(Result(State,ListOfActions[i]));
        if(temp< minvalue)
        {
            minindex =i;
            minvalue = temp
        }
    }
    

    return ListOfActions[minindex];
    
    }
    else{

    
    var ListOfActions = Actions(State);
    
    
    
    var maxindex = 0;
    var maxvalue = Minimax(Result(State,ListOfActions[0]));

    for( var i = 1;i<ListOfActions.length;i++)
    {
        var temp = Minimax(Result(State,ListOfActions[i]));
        if(temp> maxvalue)
        {
            maxindex =i;
            maxvalue = temp
        }
    }
    

    return ListOfActions[maxindex];
}

}
  function ComputervsComputer(State)
{
    //این تابع دارای ایراد است
    
    
        var selectedaction =  Minimax_Decition(State);
        
        var result = Result(State,selectedaction)
        console.log(result)
        console.log(Actions(result))
       
        setTimeout(function (){
            UpdateGamepad(result);
        },10);
        setTimeout(function (){
            var utility = {value : 0}
            if(!Terminal_Test(result,utility))
            ComputervsComputer(result)
            else if(utility.value == 1) document.getElementById("Won").innerHTML="Max Won The Game!"
            else if(utility.value == 0) document.getElementById("Won").innerHTML="Draw!"
            else if(utility.value == -1) document.getElementById("Won").innerHTML="Min Won The Game"
        },2000);

    
    
} 
function PlayerVsComputer(State)
{
    //این تابع بازی را استارت میکند
    
        UpdateGamepad(State);
     // زمین بازی آپدیت میشود بعد از ده میلی ثانیه
    // اگر نوبت مکس باشد مکس دسیژن را برای مکس و اگر نوبت مین باشد به کاربر اجازه میدهیم حرکت انجام دهد
    if(Players(State).IsMaxTurn())
    {
    var selectedaction =  Minimax_Decition(State);
        
    var result = Result(State,selectedaction) // با توجه به نتیجه ی اکشن انتخابی زمین را دوباره ریفرش میکنیم
//    console.log(result)
//    console.log(Actions(result))
//   
     
         UpdateGamepad(result);


        //این قسمت برای چک برای پایان یافتن بازی است
        var utility = {value : 0}
       
        if(!Terminal_Test(result,utility))
        PlayerVsComputer(result)
        else if(utility.value == 1) document.getElementById("Won").innerHTML="Max Won The Game!"
        else if(utility.value == 0) document.getElementById("Won").innerHTML="Draw!"
        else if(utility.value == -1) document.getElementById("Won").innerHTML="Min Won The Game"
}
}
// Method For Debugging

function javascript_abort()
{
   throw new Error('This is not an error. This is just to abort javascript');
}