describe("Guess Number ", function() {

    var origin;
    var game ;
    beforeEach(function() {
        origin =  [1,2,3,4];
        game = new Game();
    });

    it("given origin number [1,2,3,4], when input [5,6,7,8] ,then result is '0A0B' ", function() {
        var numbers = [5,6,7,8];
        expect(game.guess_num(origin,numbers)).toBe("0A0B");
    });

    it("given origin number [1,2,3,4], when input [1,2,3,4] ,then result is '4A0B' ", function() {
        var numbers = [1,2,3,4];
        expect(game.guess_num(origin,numbers)).toBe("4A0B");
    });

    it("given origin number [1,2,3,4], when input [4,3,2,1] ,then result is '0A4B' ", function() {
        var numbers = [4,3,2,1];
        expect(game.guess_num(origin,numbers)).toBe("0A4B");
    });

    it("given origin number [1,2,3,4], when input [1,2,4,3] ,then result is '2A2B' ", function() {
        var numbers = [1,2,4,3];
        expect(game.guess_num(origin,numbers)).toBe("2A2B");
    });

});
describe("create 4 different numbers ",function(){

        var created_number;
        beforeEach(function(){
            created_number = create_four_numbers()
        }) ;
        it("the created numbers are number",function(){
            expect(is_number(created_number)).toBe(true);
        });
        it("the created numbers is 4 bit",function(){
           expect(is_four_bit(created_number)).toBe(true)
        });
        it("each bit of the created numbers is different from others",function(){
            expect(is_different(created_number)).toBe(true);
        });
        it("given target_number is '1234' ,when created_number is not equal '1234' the created number is random ",function(){
            expect(is_random_number()).toBe(true);
        });
})

describe("test all test helpers  ",function(){
    it("test is_random_number() function",function(){
        expect(is_random_number()).toBe(true);
    });

    describe("test is_number() function ",function(){
        it("when input '1234' then result is true",function(){
            expect(is_number("1234")).toBe(true);
        });
        it("given '121b'  then result is false",function(){
            expect(is_number("121b")).toBe(false);
        });
        it("given '~21b'  then result is false",function(){
            expect(is_number("~21b")).toBe(false);
        });
    });
    describe("test is_four_bit() function",function(){
        it("when input '1234' then result should be true ",function(){
            expect(is_four_bit("1234")).toBe(true);
        })
        it("when input '123'  then result should be false",function(){
            expect(is_four_bit("123")).toBe(false);
        })
        it("when input '12345' then result should be false ",function(){
            expect(is_four_bit("12345")).toBe(false);
        })
        it("when input '!2f.'then result should be false ",function(){
            expect(is_four_bit("!2f.")).toBe(true);
        })
    });
});
var create_random_number_func = function(){
    return "1234";
}
describe("bind guess number and create number",function (){
        it('given random number 1234, when user guess with 1234, the result should be 4A0B',function(){

            var game = new Game(create_random_number_func);
            var result = game.play("1234")
            expect(result).toBe('4A0B')
        })

describe("6 times ",function(){
    it("guess 1 time ,when guess number is not right ,then the result should be 'not right' ",function(){
        var game = new Game(create_random_number_func);

        var given_number = "1243";

        var result = game.guess(given_number);
        expect(result).toBe("not right");
    })

    it("guess 1 time ,when guess number is right ,then the result should be 'you win' ",function(){
        var game = new Game(create_random_number_func);

        var given_number = "1234";

        var result = game.guess(given_number);
        expect(result).toBe("you win");
    })
    it("guess 3 times, 1th and 2th is wrong input ,3th is right input ,then you can get 'you win'",function(){
        var game = new Game(create_random_number_func);
        var numbers = ['1243','1323','1234'];
        var result = "";

        for(var i =0 ; i < 3; i+=1)
        {
            result =game.guess(numbers[i]);
        }

        expect(result).toBe("you win");
    })
    // 6 次



})



})