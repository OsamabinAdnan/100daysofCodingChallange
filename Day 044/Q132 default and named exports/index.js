"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personEducation = exports.personhobbies = void 0;
// Default export
function person(name, age) {
    return `My name is ${name} and my age is ${age}`;
}
exports.default = person;
// Named export
function personhobbies(...string) {
    return `My hobbies are ${string.join(" / ")}`;
}
exports.personhobbies = personhobbies;
// Named export
function personEducation(...edu) {
    return `My education is ${edu.join(" | ")}`;
}
exports.personEducation = personEducation;
