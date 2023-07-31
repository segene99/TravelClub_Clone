"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var ClubConsole = /** @class */ (function () {
    function ClubConsole() {
        //
    }
    ClubConsole.prototype.showMenu = function () {
        //
        var inputNumber = 0;
        while (true) {
            this.displayMainMenu();
            inputNumber = this.selectMainMenu();
            switch (inputNumber) {
                //
                case 1:
                    this.register();
                    break;
                case 2:
                    this.find();
                    break;
                case 3:
                    this.findAll();
                    break;
                case 0:
                    this.exitProgram();
                    return;
                default:
                    console.log('Choose Again!');
            }
        }
    };
    ClubConsole.prototype.displayMainMenu = function () {
        //
        console.log('......................');
        console.log('[Travel Club Menu]');
        console.log('......................');
        console.log(' 1. Register');
        console.log(' 2. Find');
        console.log(' 3. Find All');
        console.log(' 0. Exit program');
        console.log('......................');
    };
    ClubConsole.prototype.selectMainMenu = function () {
        //
        var answer = readline_sync_1.question('Select number : ');
        var menuNumber = parseInt(answer);
        return menuNumber;
    };
    ClubConsole.prototype.exitProgram = function () {
        //
        console.log('Program exit. Bye....');
        process.exit(0);
    };
    ClubConsole.prototype.register = function () {
        //
        console.log('You\'ve select the register menu.');
    };
    ClubConsole.prototype.find = function () {
        //
        console.log('You\'ve select the find menu.');
    };
    ClubConsole.prototype.findAll = function () {
        //
        console.log('You\'ve select the findAll menu.');
    };
    return ClubConsole;
}());
exports.default = ClubConsole;
