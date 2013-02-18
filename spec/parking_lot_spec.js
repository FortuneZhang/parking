describe("parking lot",function(){
    it("capacity is 10,available is 0 ,when park a car ,it should fail",function(){
        var parking_lot = new ParkingLot(10,0);

        var result =parking_lot.park_a_car();

        expect(result).toBe(false);
    });

    it("capacity is 10,available is 10,when park a car,it should succeed",function(){
        var parking_lot = new ParkingLot(10,10);

        var result = parking_lot.park_a_car();

        expect(result).toBe(true);
    });

    it("capacity is 10,available is 1,when park a car,available should be 0",function(){
        var parking_lot = new ParkingLot(10,1);

        parking_lot.park_a_car();

        expect(parking_lot.available).toBe(0);
    }) ;

});