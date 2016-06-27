/* Sums multiples of 3 or 5 of input (number1) */
var solve1 = function()
{
	var answer1 = document.getElementById("answer1");
	var number1 = document.getElementById("number1");
	var sum = 0;

	for (var i=1; i < number1.value; i++)
	{
		if ((i % 3 === 0) || (i % 5 === 0))
		{
			sum += i;	//If divisible by 3 or 5, then add to sum
		}
	}

	answer1.innerHTML = sum;	//Displays answer in HTML after "Answer: "
};

/* Sums even valued Fibonacci sequence of input (number2) */
var solve2 = function()
{
	var answer2 = document.getElementById("answer2");
	var number2 = document.getElementById("number2");
	var sum2 = 2;		//Includes the innitial 2 of sequence
	var a = 1;		//First number of fibonacci sequence
	var b = 2;		//Second number
	var c = 3;		//Third number

	
	while (c <= number2.value)
	{
		if (c % 2 === 0)	//Finds even numbers
		{
			sum2 += c;		//Adds the even number to sum
		}
		a = b;		//Coninues fibonacci sequence
		b = c;
		c = a + b;
	}
	answer2.innerHTML = sum2;
};

/* Finds largest prime factor of input (number3) */
function solve3() 
{
	factors = [];
	var answer3 = document.getElementById("answer3");
	var number3 = document.getElementById("number3");
	var x = 2;


	while (number3.value > 1) 				//Deteremines all the prime factors of input (number3)
	{
		while (number3.value % x == 0) 		//Checks is divisible by 2
		{
			factors.push(x);				//If factor, pushes it to array
			number3.value /= x;
		}
		x += 1;								//Increments to check if divisible by x + 1
	}

	var largest_prime_factor = Math.max.apply(Math, factors); //Finds largest prime factor in factors[]
	answer3.innerHTML = largest_prime_factor;
};
