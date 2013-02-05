function create_four_numbers()
{
    var numbers ="";
    var random_number =Math.floor(Math.random()*9);
    numbers +=random_number;
    var i =0;

    while(numbers.length !=4 )
    {
        random_number =Math.floor(Math.random()*9);
        for(i =0; i < numbers.length; i +=1)
        {
            if(numbers[i] ==random_number)
            {
                break;
            }
        }
        if(i >=  numbers.length)
        {
              numbers +=random_number;
        }
    }
    return numbers;
}
function is_four_bit(number)
{
    if(number.length !=4)
        return false;
    return true;

//    return number >123 && number < 9876 ?true:false;
}
function is_different(number)
{
    var i=0;
    var j=0;
    var result =true;
    for(i=0;i <4; i +=1)
    {
        if(!result )
        {
            break;
        }
        for(j=i;j < 3; j ++ )
        {
           if(number[j] == number[j+=1])
           {
               result =false;
               break;
           }
        }
    }
    return result;
}
function is_random_number()
{
    var result = true;
    var test_counts =10;
    var created_numbers =[];
    for(var i =test_counts;i >0 ;i -=1)
    {
        created_numbers.push(create_four_numbers());
    }
    for(var i =0; i< test_counts;i +=1)
    {
        if(!result)
        {
            return;
        }
        for(var j =i;j <test_counts-1; j+=1)
        {
                      if(created_numbers[j] == created_numbers[j+1])
                      {
                          result =false;
                          break;
              }
        }
    }
    return result;
}function is_random_number()
{
    var result = true;
    var test_counts =10;
    var created_numbers =[];
    for(var i =test_counts;i >0 ;i -=1)
    {
        created_numbers.push(create_four_numbers());
    }
    for(var i =0; i< test_counts;i +=1)
    {
        if(!result)
        {
            return;
        }
        for(var j =i;j <test_counts-1; j+=1)
        {
                      if(created_numbers[j] == created_numbers[j+1])
                      {
                          result =false;
                          break;
              }
        }
    }
    return result;
}
function is_random_number() {
    var result = true;
    var test_counts = 10;
    var created_numbers = [];
    for (var i = test_counts; i > 0; i -= 1) {
        created_numbers.push(create_four_numbers());
    }
    for (var i = 0; i < test_counts; i += 1) {
        if (!result) {
            return;
        }
        for (var j = i; j < test_counts - 1; j += 1) {
            if (created_numbers[j] == created_numbers[j + 1]) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function is_number(arg) {
    return !isNaN(arg)
}


function play_game()
{
    var random_number =create_four_numbers();
}

function Game(create_random_number_func){
    this.create_random_number_func = create_random_number_func;
}

Game.prototype.play = function(numbers){
    var origin =this.create_random_number_func()
    return this.guess_num(origin,numbers);
}
Game.prototype.guess_num = function(origin, numbers)
{
    var A_count = 0;
    var B_count = 0;
    var i = 0, j =0;
    for(i=0;i < 4; i++)
    {
        if(origin[i] == numbers[i])
            A_count++;
    }
    for(i=0; i < 4; i ++)
    {
        for(j =0 ; j < 4; j ++)
        {
            if(origin[i] == numbers[j])
                B_count ++;
        }
    }
    return A_count+"A" + (B_count-A_count) +"B";
}