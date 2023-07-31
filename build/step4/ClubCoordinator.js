"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClubStorage_1 = __importDefault(require("./ClubStorage"));
var ClubCoordinator = /** @class */ (function () {
    function ClubCoordinator() {
        //
        this.clubStorage = new ClubStorage_1.default();
    }
    ClubCoordinator.prototype.hasClubs = function () {
        //
        return this.clubStorage.count() !== 0;
    };
    ClubCoordinator.prototype.register = function (newClub) {
        //
        var clubName = this.clubStorage.store(newClub);
        return clubName !== null;
    };
    ClubCoordinator.prototype.exist = function (name) {
        //
        return this.clubStorage.exist(name);
    };
    ClubCoordinator.prototype.find = function (name) {
        //
        return this.clubStorage.retrieve(name);
    };
    ClubCoordinator.prototype.findAll = function () {
        //
        return this.clubStorage.retrieveAll();
    };
    return ClubCoordinator;
}());
exports.default = ClubCoordinator;
