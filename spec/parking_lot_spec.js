describe("parking lot",function(){

    it("capacity is 0,when park a car ,it should fail",function(){
        var parking_lot = new ParkingLot(0,"hello");

        var result =parking_lot.parking_a_car(1);

        expect(result).toBe("fail");
    });

    it("capacity is 10,available is 10,when park a car,position  should  0",function(){
        var parking_lot = new ParkingLot(10,"hello");

        var result = parking_lot.parking_a_car(1);

        expect(result).toBe("hello:0");
    });

    it("capacity is 10,when park a car,capacity should be 9",function(){
        var parking_lot = new ParkingLot(10,"hello");

        parking_lot.parking_a_car(1);

        expect(parking_lot.get_available_count()).toBe(9);
    }) ;

    it("available is 10,when get available count ,it should be 10",function(){
        var parking_lot = new ParkingLot(10,"hello");

        var capacity_count = parking_lot.get_available_count();

        expect(capacity_count).toBe(10);
    });

});
 describe("parking boy control a parking lot",function(){
     var result ;
     var parking_lot ;
     var parking_boy ;
     var park_lot_array ;
     beforeEach(function () {
         park_lot_array = new Array;
         parking_lot = new ParkingLot(10, "hello");
         park_lot_array.push(parking_lot);
         parking_boy = new ParkingBoy(park_lot_array);
     });


     it("parking lot is  full ,when parking boy park a car,it should be fail",function(){
         parking_lot = new ParkingLot(0,"hello");
         park_lot_array[0] =parking_lot ;

         parking_boy = new ParkingBoy(park_lot_array);
         expect(parking_boy.parking_lots[0].get_available_count()).toBe(0);

         var result =parking_boy._parking_a_car(1);

         expect(result).toBe("fail");
     });

     it("parking lot is not full ,when parking boy park a car,it should be 0",function(){
         expect(parking_boy.parking_lots[0].get_available_count()).not.toBe(0);

         var result =parking_boy._parking_a_car(1);

         expect(result).toBe("hello:0");
     });

     it('parking lot is not full ,available is 10,when parking boy park a car,then available is 9', function () {
         parking_boy._parking_a_car(1);

         result = parking_boy.get_available_count();
         expect(result).toBe(9);
     });

     it('parking lot available is 10 and has pork 3 car,when parking boy park a car,then position is 3', function () {
         parking_boy._parking_a_car(1);
         parking_boy._parking_a_car(2);
         parking_boy._parking_a_car(3);

         result = parking_boy._parking_a_car(4);

         expect(result).toBe("hello:3");
     });

     it("has park a car number is 1, when I un park the car ,I can get the car number is 1",function(){
         var ticket;
         ticket = parking_boy._parking_a_car(1);

         result = parking_boy._un_parking_a_car(ticket);

         expect(result).toBe(1);
     });

     it("has park 4 cars,when parking boy un park a car, when i can get available will increase",function(){
         var before_up_park_available_count;
         var after_up_park_available_count;
         var ticket;
         parking_boy._parking_a_car(233);
         parking_boy._parking_a_car(225);
         ticket = parking_boy._parking_a_car(12);
         parking_boy._parking_a_car(978);
         before_up_park_available_count = parking_boy.get_available_count();

         parking_boy._un_parking_a_car(ticket) ;
         after_up_park_available_count = parking_boy.get_available_count();

         expect(after_up_park_available_count).toBe(before_up_park_available_count + 1) ;
     }) ;
 });
describe("parking boy can control many parking lot", function () {
    var parking_boy ;
    var parking_lot_array;
    var parking_lot_with_10;
    var parking_lot_with_18;
    var parking_lot_with_7;
    beforeEach(function(){
        parking_lot_array = new Array;
        parking_lot_with_10 = new ParkingLot(10,"hello");
        parking_lot_with_18 = new ParkingLot(18,"world");
        parking_lot_with_7 = new ParkingLot(7,"ni hao");
        parking_lot_array.push(parking_lot_with_10);
        parking_lot_array.push(parking_lot_with_18);
        parking_lot_array.push(parking_lot_with_7);
        parking_boy = new ParkingBoy(parking_lot_array) ;
    }) ;


    it("park boy control 3 lots and 2th has most available count, when park boy park a can ,then he park it in 2th", function () {
        var most_available_lot = parking_lot_with_18 ;
        var lot_available_count_before_park ;
        var lot_available_count_after_park ;
        lot_available_count_before_park = most_available_lot.get_available_count();

        parking_boy.parking_a_car(222,PARKING_LOT_CHOICES.park_in_most_available);
        lot_available_count_after_park = most_available_lot.get_available_count();

        expect(lot_available_count_after_park).toBe(lot_available_count_before_park-1) ;
    });

    it("park a car and it's number is 123, when park boy un park a car ,it should be 123",function(){
        var ticket ;
        var car_number;
        ticket= parking_boy.parking_a_car(123,PARKING_LOT_CHOICES.park_in_most_available);

        car_number = parking_boy.un_parking_a_car(ticket) ;

        expect(car_number).toBe(123);

    }) ;

    it("percent available three lot is 9/10 17/18 6/7 ,when park a car," +
        "the car will be parked in the highest " +
        "available/capacity percent this is 17 /18 ",function(){
        parking_lot_with_10.parking_a_car(123);
        parking_lot_with_18.parking_a_car(234);
        parking_lot_with_7.parking_a_car(345);

        parking_boy.parking_a_car(888,PARKING_LOT_CHOICES.park_in_highest_percent_available);

        expect(parking_lot_with_18.get_percent_available()).toBe((16 / 18)) ;
    });





});




















