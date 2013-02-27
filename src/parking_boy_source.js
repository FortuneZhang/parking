

function ParkingBoy(parking_lot_array)
{
    this.parking_lots =parking_lot_array;

    this.parking_strategy = PARKING_LOT_CHOICES.park_in_most_available;
}

ParkingBoy.prototype.set_park_strategy = function (parking_strategy)
{
    this.parking_strategy = parking_strategy;
};

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

ParkingBoy.prototype.parking_a_car = function(car_number)
{
    var choice_lot_strategy = new ChoiceLotStrategy(this.parking_lots);

    var lot = choice_lot_strategy.choice_a_lot_base_parking_strategy(this.parking_strategy);

    return lot.parking_a_car(car_number) ;
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

    return lot.un_parking_a_car(car_number);
};






