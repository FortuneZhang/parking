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
        if (this.parking_position[position] == undefined || this.parking_position[position] == -1) {
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
}

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


function ParkingBoy(parking_lot_array)
{
    this.parking_lots =parking_lot_array;
}

ParkingBoy.prototype.parking_a_car = function(car_number)
{
   return  this.parking_lots[0].parking_a_car(car_number);
};

ParkingBoy.prototype.get_available_count = function()
{
    return this.parking_lots[0].get_available_count();
};

ParkingBoy.prototype.un_parking_a_car = function(ticket)
{
    var car_number = ticket.split(":")[1];
    return this.parking_lots[0].un_parking_a_car(car_number);
};

ParkingBoy.prototype.get_most_available_lot = function() {
    var lots_count = -1;
    var i;
    var most_available_lot;
    for (i = 0; i < this.parking_lots.length; i += 1) {
        if (this.parking_lots[i].get_available_count() > lots_count) {
            most_available_lot = this.parking_lots[i];
            lots_count = this.parking_lots[i].get_available_count();
        }
    }
    return most_available_lot;
};
ParkingBoy.prototype.parking_a_car_in_most_available_lot = function(car_number)
{
    var most_available_lot ;
    most_available_lot = this.get_most_available_lot();
    return most_available_lot.parking_a_car(car_number);
} ;

ParkingBoy.prototype.un_parking_a_car_from_lots = function(ticket)
{
    var lot;
    var lot_name = ticket.split(":")[0];
    var car_number = ticket.split(":")[1];
    for(var i = 0; i< this.parking_lots.length; i += 1)
    {
        lot = this.parking_lots[i].get_lot_name() == lot_name ? this.parking_lots[i] : lot;
    }

    return lot.un_parking_a_car(car_number)

}











