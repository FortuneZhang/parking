var PARKING_LOT_CHOICES = {
    park_in_most_available :'parking_a_car_in_most_available_lot' ,
    park_in_highest_percent_available :'parking_a_car_in_available_percent_highest_lot'
};

function ChoiceLotStrategy(parking_lots)
{
    this.parking_lots = parking_lots;
}

ChoiceLotStrategy.prototype.choice_a_lot_base_parking_strategy = function(strategy)
{
    return this[strategy]();
};

ChoiceLotStrategy.prototype.parking_a_car_in_most_available_lot = function()
{
    var lots_count = -1;
    var most_available_lot;
    for (var i = 0; i < this.parking_lots.length; i += 1) {
        if (this.parking_lots[i].get_available_count() > lots_count) {
            most_available_lot = this.parking_lots[i];
            lots_count = this.parking_lots[i].get_available_count();
        }
    }
    return most_available_lot;
};


ChoiceLotStrategy.prototype.parking_a_car_in_available_percent_highest_lot = function ()
{
    var highest_percent_available_parking_lot ;

    for(var i = 0 ; i <  this.parking_lots.length - 1; i += 1)
    {
        highest_percent_available_parking_lot =
            this.parking_lots[i].get_percent_available() > this.parking_lots[i + 1].get_percent_available()?
                this.parking_lots[i] : this.parking_lots[i + 1] ;

    }
    return highest_percent_available_parking_lot;
};
