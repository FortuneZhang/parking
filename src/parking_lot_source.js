function ParkingLot(capacity)
{
    this.parking_position = new Array(capacity);
    this.available_count = capacity;
}
ParkingLot.prototype.parking_a_car = function (car_number) {
    var position = 0;
    if (this.available_count == 0) {
        return "fail";
    }
    for (position; position < this.parking_position.length; position += 1) {
        if (this.parking_position[position] == undefined || this.parking_position[position] == -1) {
            break;
        }
    }
    this.available_count -= 1;
    this.parking_position[position] = car_number;
    return position;
};

ParkingLot.prototype.get_available_count = function()
{
    return this.available_count;
} ;

ParkingLot.prototype.un_parking_a_car = function(ticket)
{
    var car_number = this.parking_position[ticket];
    this.parking_position[ticket] = -1;
    this.available_count += 1;
    return car_number;
}


function ParkingBoy(parking_lot)
{
    this.parking_lot =parking_lot;
}

ParkingBoy.prototype.parking_a_car = function(car_number)
{
   return  this.parking_lot.parking_a_car(car_number);
};

ParkingBoy.prototype.get_available_count = function()
{
    return this.parking_lot.get_available_count();
};

ParkingBoy.prototype.un_parking_a_car = function(ticket)
{
    return this.parking_lot.un_parking_a_car(ticket);
}








