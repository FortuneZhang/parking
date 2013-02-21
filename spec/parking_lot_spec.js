describe("parking lot",function(){

    it("capacity is 0,when park a car ,it should fail",function(){
        var parking_lot = new ParkingLot(0);

        var result =parking_lot.parking_a_car(1);

        expect(result).toBe("fail");
    });

    it("capacity is 10,available is 10,when park a car,position  should  0",function(){
        var parking_lot = new ParkingLot(10);

        var result = parking_lot.parking_a_car(1);

        expect(result).toBe(0);
    });

    it("capacity is 10,when park a car,capacity should be 9",function(){
        var parking_lot = new ParkingLot(10);

        parking_lot.parking_a_car(1);

        expect(parking_lot.get_available_count()).toBe(9);
    }) ;

    it("available is 10,when get available count ,it should be 10",function(){
        var parking_lot = new ParkingLot(10);

        var capacity_count = parking_lot.get_available_count();

        expect(capacity_count).toBe(10);
    });

});
 describe("parking boy control a parking lot",function(){
     var result ;
     var parking_lot ;
     var parking_boy ;
     beforeEach(function(){
         parking_lot = new ParkingLot(10);
         parking_boy = new ParkingBoy(parking_lot);
     })


     it("parking lot is  full ,when parking boy park a car,it should be fail",function(){
         parking_lot = new ParkingLot(0);
         parking_boy = new ParkingBoy(parking_lot);
         expect(parking_boy.parking_lot.get_available_count()).toBe(0);

         var result =parking_boy.parking_a_car(1);

         expect(result).toBe("fail");
     });

     it("parking lot is not full ,when parking boy park a car,it should be 0",function(){
         expect(parking_boy.parking_lot.get_available_count()).not.toBe(0);

         var result =parking_boy.parking_a_car(1);

         expect(result).toBe(0);
     });

     it('parking lot is not full ,available is 10,when parking boy park a car,then available is 9', function () {
         parking_boy.parking_a_car(1);

         result = parking_boy.get_available_count();
         expect(result).toBe(9);
     });

     it('parking lot available is 10 and has pork 3 car,when parking boy park a car,then position is 3', function () {
         parking_boy.parking_a_car(1);
         parking_boy.parking_a_car(2);
         parking_boy.parking_a_car(3);

         result = parking_boy.parking_a_car(4);

         expect(result).toBe(3);
     });

     it("has park a car number is 1, when I un park a car ,I can get the 1",function(){
         var ticket;
         ticket = parking_boy.parking_a_car(1);

         result = parking_boy.un_parking_a_car(ticket);

         expect(result).toBe(1);
     });

     it("has park 3 cars,when parking boy un park a car, when i can get available will increase",function(){
         var before_up_park_available_count;
         var after_up_park_available_count;
         var ticket;
         parking_boy.parking_a_car(233);
         parking_boy.parking_a_car(225);
         ticket = parking_boy.parking_a_car(12);
         parking_boy.parking_a_car(978);
         before_up_park_available_count = parking_boy.get_available_count();

         parking_boy.un_parking_a_car(ticket) ;
         after_up_park_available_count = parking_boy.get_available_count();

         expect(after_up_park_available_count).toBe(before_up_park_available_count + 1) ;
     }) ;

 });



















