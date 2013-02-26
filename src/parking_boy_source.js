
function ParkingBoy(parking_lot_array)
{
    this.parking_lots =parking_lot_array;
}

ParkingBoy.prototype._parking_a_car = function(car_number)
{
    return  this.parking_lots[0].parking_a_car(car_number);
};

ParkingBoy.prototype.get_available_count = function()
{
    return this.parking_lots[0].get_available_count();
};

ParkingBoy.prototype._un_parking_a_car = function(ticket)
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
ParkingBoy.prototype.parking_a_car = function(car_number)
{
    var most_available_lot ;
    most_available_lot = this.get_most_available_lot();
    return most_available_lot.parking_a_car(car_number);
} ;

ParkingBoy.prototype.un_parking_a_car = function(ticket)
{
    var lot = "";
    var lot_name = ticket.split(":")[0];
    var car_number = ticket.split(":")[1];
    for(var i = 0; i< this.parking_lots.length; i += 1)
    {
        lot = this.parking_lots[i].get_lot_name() == lot_name ? this.parking_lots[i] : lot;
    }

    return lot.un_parking_a_car(car_number)
};


ParkingBoy.prototype.parking_a_car_in_available_percent_highest_lot = function(car_number)
{
    var highest_percent_available_parking_lot ;

    for(var i = 0 ; i < this.parking_lots.length - 1; i += 1)
    {
        highest_percent_available_parking_lot =
            this.parking_lots[i].get_percent_available() > this.parking_lots[i + 1].get_percent_available()?
                this.parking_lots[i] : this.parking_lots[i + 1] ;

    }
    return highest_percent_available_parking_lot.parking_a_car(car_number);
};




