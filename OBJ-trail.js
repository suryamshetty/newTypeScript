"use strict";
var person = {
    Name: "max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "authr"],
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var fam = {
    mole: Role.ADMIN,
};
person.role.push("added");
console.log(person.role);
console.log(person.Name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toUpperCase());
}
if (fam.mole === Role.ADMIN) {
    console.log("ADMIN Role");
}
