"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing a default export:
const index_1 = __importDefault(require("./index"));
// Importing named exports:
const index_2 = require("./index");
// This code illustrates the syntax and usage differences 
// between default and named exports.
console.log((0, index_1.default)("Osama", 35));
console.log((0, index_2.personhobbies)("coding", "history", "web development"));
console.log((0, index_2.personEducation)("BS textile", "MBA Marketing"));
