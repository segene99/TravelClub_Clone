"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClubStorage = /** @class */ (function () {
    function ClubStorage() {
        //
        this.clubs = [];
    }
    ClubStorage.prototype.count = function () {
        //
        return this.clubs.length;
    };
    ClubStorage.prototype.exist = function (name) {
        //
        for (var _i = 0, _a = this.clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            if (club.name === name) {
                return true;
            }
        }
        return false;
    };
    ClubStorage.prototype.store = function (club) {
        //
        this.clubs.push(club);
        return club.name;
    };
    ClubStorage.prototype.retrieve = function (name) {
        //
        for (var _i = 0, _a = this.clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            if (club.name === name) {
                return club;
            }
        }
        return null;
    };
    ClubStorage.prototype.retrieveAll = function () {
        //
        return this.clubs;
    };
    return ClubStorage;
}());
exports.default = ClubStorage;
