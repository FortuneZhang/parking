function ParkingLot(capacity)
{
    this.capacity = capacity;
}
ParkingLot.prototype.park_a_car = function()
{
    if(this.capacity == 0)
    {
        return "fail";
    }
    this.capacity -=1;
    return "success";
}
ParkingLot.prototype.get_capacity_count = function()
{
    return this.capacity;
}