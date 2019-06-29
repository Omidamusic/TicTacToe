var elem = document.getElementById("Gamepad");
elem.addEventListener('click', function(e) {
    //در این قسمت قابلیت کلیک کردن به کانواس می افزاییم و با توجه به مختصاتی که کلیک شده است حرکت را برای مین انجام میدهیم
    if(maxpositions.length == minpositions.length)
    {
        return
        //این یعنی نوبت مین نیست
    }
    var mousePos = getMousePos(elem, e);
    var x = mousePos.x;
    var y = mousePos.y;
        var GamepadWidth =0;
        if(window.innerWidth<992)
        GamepadWidth = window.innerWidth;
        else
        GamepadWidth = window.innerWidth/2;
    // Collision detection between clicked offset and element.
    
    for(var i = 1;i<4;i++)
    {
        for(var j =1 ;j<4;j++)
        {
            if(x<GamepadWidth*i/3 && y<GamepadWidth*j/3 && x>(GamepadWidth*(i-1)/3) && y>(GamepadWidth*(j-1)/3))
            {
                //در اینجا برای مین حرکت را انجام میدهیم و مکانی که انتخاب کرده است را به مین پوزیشنز افزوده و زمین بازی را ریفرش میکنیم و حرکت بعدی را با فراخوانی تایع آخر دوباره به مکس ارجاع میدهیم
                var result = (j-1)*3+i;
                minpositions[minpositions.length] = result;
                var state = new State();
                state.Maxpositions = maxpositions;
                state.Minpositions = minpositions
                UpdateGamepad(state);
                PlayerVsComputer(state);
                
            }
        }
    }
  

}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}