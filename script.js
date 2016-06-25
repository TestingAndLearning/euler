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

var solve2 = function()
{
	var answer2 = document.getElementById("answer2");
	var number2 = document.getElementById("number2");
	var sum2 = 2;
	var a = 1;
	var b = 2;
	var c = 3;

	
	while (c <= number2.value)
	{
		if (c % 2 === 0)
		{
			sum2 += c;
		}
		a = b;
		b = c;
		c = a + b;

	}

	answer2.innerHTML = sum2;
};

var solve3 = function()
{
	var answer3 = document.getElementById("answer3");
	var number3 = document.getElementById("number3");
	var factor = 1;
	var search = 1;

	for (var i=(number3.value/2); i>1; i--)
	{
		if (i % 2 != 0 &&
			i % 3 != 0 &&
			i % 5 != 0 &&
			i % 7 != 0 &&
			search === 1)
		{
			if (number3.value % i === 0)
			{
				factor = i;
				search = 0;
			}
		}
	}
	
	answer3.innerHTML = factor;
};

