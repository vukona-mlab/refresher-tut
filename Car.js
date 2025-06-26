export class Car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        return (2025-this.year);
    }
}