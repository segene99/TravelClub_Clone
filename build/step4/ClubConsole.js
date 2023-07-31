"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var TravelClub_1 = __importDefault(require("./TravelClub"));
var ClubCoordinator_1 = __importDefault(require("./ClubCoordinator"));
var ClubConsole = /** @class */ (function () {
    function ClubConsole() {
        //객체 초기화
        this.clubCoordinator = new ClubCoordinator_1.default();
    }
    ClubConsole.prototype.showMenu = function () {
        //유저의 input 변수 선언 및 초기화
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
        var menuNumber = readline_sync_1.question('Select number: ');
        if (menuNumber.length !== 1) {
            console.log('Allow only one digit, but it\'s --> ' + menuNumber);
            return -1;
        }
        if (menuNumber === '0' || menuNumber === '1' || menuNumber === '2' || menuNumber === '3') {
            return parseInt(menuNumber);
        }
        else {
            console.log('Input a valid digit.');
            return -1;
        }
    };
    ClubConsole.prototype.exitProgram = function () {
        //
        console.log('Program exit. Bye....');
        process.exit(0);
    };
    ClubConsole.prototype.register = function () {
        //
        var answer = readline_sync_1.question('\n Input Club Name: ');
        var clubName = answer;
        clubName = clubName.trim();
        if (!clubName || !clubName.length) {
            console.log('Club name should not be null.');
            return;
        }
        if (this.clubCoordinator.exist(clubName)) {
            console.log('\n> Club name alraedy exists. --> ' + clubName);
            return;
        }
        var clubIntro = readline_sync_1.question(' Input Club Intro: ');
        if (!clubIntro || !clubIntro.length) {
            return;
        }
        clubIntro = clubIntro.trim();
        var newClub = new TravelClub_1.default(clubName, clubIntro);
        var isRegistered = this.clubCoordinator.register(newClub);
        if (isRegistered) {
            console.log('\n> Registered club: ', newClub);
        }
        else {
            console.log('\n> Sorry, fail to register the club.');
        }
    };
    ClubConsole.prototype.find = function () {
        //
        var clubName = '';
        while (true) {
            clubName = this.displayFindMenuAndGetKey();
            if (clubName === '0') {
                return;
            }
            var travelClub = null;
            travelClub = this.clubCoordinator.find(clubName);
            if (travelClub) {
                console.log('\n> Found club: ', travelClub);
            }
            else {
                console.log('\n> No such a club: ' + clubName);
            }
        }
    };
    ClubConsole.prototype.displayFindMenuAndGetKey = function () {
        //
        if (!this.clubCoordinator.hasClubs()) {
            console.log('\n> No clubs in the storage.');
            return '0';
        }
        var clubName = readline_sync_1.question('\n Input club name to find(0.Previous menu): ');
        return clubName.trim();
    };
    ClubConsole.prototype.findAll = function () {
        //
        if (!this.clubCoordinator.hasClubs()) {
            console.log('\n> No clubs in the storage');
            return;
        }
        var clubs = [];
        clubs = this.clubCoordinator.findAll();
        console.log('\n> Found ' + clubs.length + ' clubs.');
        for (var _i = 0, clubs_1 = clubs; _i < clubs_1.length; _i++) {
            var club = clubs_1[_i];
            console.log('\n> Found club: ', club);
        }
    };
    return ClubConsole;
}());
exports.default = ClubConsole;
