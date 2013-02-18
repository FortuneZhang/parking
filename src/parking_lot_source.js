function ParkingLot(capacity,available)
{
    this.capacity = capacity;
    this.available = available;
}
ParkingLot.prototype.park_a_car = function()
{
    return this.available != 0 ? true:false;
}