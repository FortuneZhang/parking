describe("parking lot",function(){

    it("capacity is 0,when park a car ,it should fail",function(){
        var parking_lot = new ParkingLot(0);

        var result =parking_lot.park_a_car();

        expect(result).toBe("fail");
    });

    it("capacity is 10,available is 10,when park a car,it should succeed",function(){
        var parking_lot = new ParkingLot(10);

        var result = parking_lot.park_a_car();

        expect(result).toBe("success");
    });

    it("capacity is 10,when park a car,capacity should be 9",function(){
        var parking_lot = new ParkingLot(10);

        parking_lot.park_a_car();

        expect(parking_lot.capacity).toBe(9);
    }) ;

    it("available is 10,when get available count ,it should be 10",function(){
        var parking_lot = new ParkingLot(10);

        var capacity_count = parking_lot.get_capacity_count();

        expect(capacity_count).toBe(10);
    });
});