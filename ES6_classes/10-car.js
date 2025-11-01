export default class Car{
    constructor(brand,motor,color){
        this._brand=brand
        this._motor=motor
        this._color=color
    }
    cloneCar(){
        const newCar = Object.getPrototypeOf(this).constructor;
        return new newCar(this._brand,this._motor,this._color)
    }
}
