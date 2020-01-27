var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.showEmp = function () {
        return this.name;
    };
    return Employee;
}());
var emp = new Employee("Maharshi");
console.log(emp.showEmp());
console.log();
var Eng = /** @class */ (function (_super) {
    __extends(Eng, _super);
    function Eng(name, roll) {
        var _this = _super.call(this, name) || this;
        _this.roll = roll;
        return _this;
    }
    Eng.prototype.showEng = function () {
        return "My name is " + this.name + " and my roll is " + this.roll + " engineer";
    };
    return Eng;
}(Employee));
var eng = new Eng("Maharshi", "Software");
console.log(eng.showEmp());
console.log(eng.showEng());
console.log();
var person = /** @class */ (function () {
    function person(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Object.defineProperty(person.prototype, "fname", {
        get: function () {
            return this.firstname;
        },
        set: function (fname) {
            this.firstname = fname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(person.prototype, "lname", {
        get: function () {
            return this.lastname;
        },
        set: function (lname) {
            this.lastname = lname;
        },
        enumerable: true,
        configurable: true
    });
    person.prototype.show = function () {
        return this.fname + " " + this.lname;
    };
    return person;
}());
var p = new person("Maharshi", "Limbachiya");
console.log(p.show());
