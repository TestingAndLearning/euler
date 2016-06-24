var solve1 = function()
{
	var answer1 = document.getElementById("answer1");
	var number1 = document.getElementById("number1");
	var sum = 0;

	for (var i=1; i < number1.value; i++)
	{
		if ((i % 3 === 0) || (i % 5 === 0))
		{
			sum += i;
		}
	}
	
	answer1.innerHTML = sum;
};

