function ParkingLot(capacity,park_name)
{
    this.parking_position = new Array(capacity);
    this.available_count = capacity;
    this.park_name = park_name;
}
ParkingLot.prototype.parking_a_car = function (car_number) {
    var position = 0;
    if (this.available_count == 0) {
        return "fail";
    }
    for (position; position < this.parking_position.length; position += 1) {
        if (this.parking_position[position] == undefined || this.parking_position[position] == -1)
        {
            break;
        }
    }
    this.available_count -= 1;
    this.parking_position[position] = car_number;
    return this.park_name + ":" +position;
};

ParkingLot.prototype.get_lot_name = function()
{
    return this.park_name;
} ;

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
};

ParkingLot.prototype.get_percent_available = function()
{
    return this.available_count / this.parking_position.length ;
};







