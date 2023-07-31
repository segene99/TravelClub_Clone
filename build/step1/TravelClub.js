"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TravelClub = /** @class */ (function () {
    function TravelClub(name, intro) {
        //
        this.name = name;
        this.intro = intro;
    }
    Object.defineProperty(TravelClub.prototype, "clubInfo", {
        get: function () {
            //
            return "club name: " + this.name + ",  intro: " + this.intro;
        },
        enumerable: false,
        configurable: true
    });
    TravelClub.prototype.tellMeAboutYou = function () {
        //
        console.log(this.clubInfo);
    };
    return TravelClub;
}());
exports.default = TravelClub;
