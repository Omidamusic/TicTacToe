//اولین نوع استیت ها هستند
function State()
{
    //این فیلد مشخص میکند که در این استیت مکس چه خانه هایی را اشغال کرده است
    this.Maxpositions=[];
    this.Minpositions=[];  //این فیلد مشخص میکند که در این استیت مین چه خانه هایی را اشغال کرده است
    this.Actions=function (){
        //Returning List Of Actions Here
        var ListOfActions =[];
        //لیست اکشن های مجاز باگردانده میشود
      var numberstoadd = [1,2,3,4,5,6,7,8,9]; //ایتدا لیستی ازز نامبر ها را در نظر میگیریم و یه دونه یه دونه ازش کم میکنیم
        var k=0;
        var j=0;
        this.Maxpositions.sort();
        this.Minpositions.sort();
        //دولیست را سورت کرده و دونه دونه هر چیزی که در آنها هست را از
        //numberstoadd
        //کم کرده و در نهایت خانه هایی که خالی هستند باقی میمانند و میتوان آنها را برگرداند
        for(var i=0;i<numberstoadd.length;i++)
            {
                var condition = false;
                if(this.Maxpositions[j]==numberstoadd[i])
                    {
                        
                        j++;
                        condition = true;
                        
                    }
                if(this.Minpositions[k]==numberstoadd [i])
                    {
                        
                        k++;
                        condition = true;
                        
                            
                    }
                    if(condition)
                    {
                        numberstoadd.splice(i,1);
                        i--;
                    }
            }
            //testing
           // console.log(numberstoadd);
        for(var i = 0;i<numberstoadd.length;i++)
            {
            
                ListOfActions[ListOfActions.length] = new Action(Players(this),numberstoadd[i]); // اکشنی به ازای خانه های باقیمانده میسازیم
            }
            
        return ListOfActions;
    }
}
//دومین نوع بازیکنان هستند
function Player(name)
{
    //Setting String Input Or By Default "MAX"
    //این نوع بازیکن است که یا مین است و یا مکس و تابع ایز مکس ترن مشخص میکند که آیا نوبت مکس هست یا خیر
    this.TEXT=name || "MAX";
    this.IsMaxTurn = function (){
        if(this.TEXT == "MAX")
            return true;
        else return false;
    }
    //این تابع مشخص میکند که آیا نوبت مین است  یا خیر
    this.IsMinTurn = function (){
        return !this.IsMaxTurn();
    }
    }

//سومین نوع اکشن ها هستند 
function Action(Player,number){
    //اکشن دارای سه فیلد است که یا ایکس میگذارد و یا او و دارای یک پوزیشن برای گذاشتن آن کاراکتر است
        this.ADDNUMBERFORMAX = Player.IsMaxTurn();
        this.ADDNUMBERFORMIN = Player.IsMinTurn();
        this.POSITIONTOADD = number;
}