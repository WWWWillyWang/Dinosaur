//jump start
function jump() 
{
	var dinosaur = document.getElementById('dinosaur');
	var flag = 0;
	var top = 49;
	function height()
	{
		document.getElementById("jump").disabled = true;
		if(dinosaur.style.top=="20%")
		{
			flag=1;
			top++;
			dinosaur.style.top = top + "%";
		}
		else if(dinosaur.style.top=="49%"&&flag==1)
		{
			document.getElementById("jump").disabled = false;
			clearInterval(id);
		}
		else if(flag==1)
		{
			top++;
			dinosaur.style.top = top + "%";
		}
		else
		{
			top--;
			dinosaur.style.top = top + "%";
		}
	}
	var id = setInterval(height,15);
}
//jump end

//background
var current = 1;

function update() 
{  
  var background = document.getElementById("background");

    if (current == 1) {
      background.src = "dinosuar_background1.jpg";
    }
    if (current == 2) {
      background.src = "dinosuar_background2.jpg";
    }
    if (current == 3) {
      background.src = "dinosuar_background3.jpg";
    }
    if (current == 4) {
      background.src = "dinosuar_background4.jpg";
    }
    if (current == 5) {
      background.src = "dinosuar_background5.jpg";
    }

    current = current + 1;
    if (current > 5) {
        current = 1;
    }

}
setInterval(update, 400);
//background end