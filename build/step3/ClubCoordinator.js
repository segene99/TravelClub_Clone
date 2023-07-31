"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClubCoordinator = /** @class */ (function () {
    function ClubCoordinator() {
        //
        this.clubs = [];
    }
    ClubCoordinator.prototype.hasClubs = function () {
        //
        return this.clubs.length !== 0;
    };
    ClubCoordinator.prototype.exist = function (name) {
        //
        for (var i = 0; i < this.clubs.length; i++) {
            if ((this.clubs[i] !== undefined) && (this.clubs[i].name === name)) {
                return true;
            }
        }
        return false;
    };
    ClubCoordinator.prototype.register = function (newClub) {
        //
        var foundClub = this.exist(newClub.name);
        if (foundClub) {
            return '0';
        }
        this.clubs.push(newClub);
        return newClub.name;
    };
    ClubCoordinator.prototype.find = function (name) {
        //
        for (var i = 0; i < this.clubs.length; i++) {
            if (this.clubs[i].name === name) {
                return this.clubs[i];
            }
        }
        return null;
    };
    ClubCoordinator.prototype.findAll = function () {
        //
        return this.clubs;
    };
    return ClubCoordinator;
}());
exports.default = ClubCoordinator;
