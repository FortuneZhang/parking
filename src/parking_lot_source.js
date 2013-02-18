function ParkingLot(capacity,available)
{
    this.capacity = capacity;
    this.available = available;
}
ParkingLot.prototype.park_a_car = function()
{
    if(this.available == 0)
    {
        return false;
    }
    this.available -=1;
    return true;
}