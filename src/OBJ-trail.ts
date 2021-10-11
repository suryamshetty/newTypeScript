const person: {
  Name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  Name: "max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "authr"],
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const fam = {
  mole: Role.ADMIN,
};
person.role.push("added");

console.log(person.role);

console.log(person.Name);
for (const h of person.hobbies) {
  console.log(h.toUpperCase());
}

if (fam.mole === Role.ADMIN) {
  console.log("ADMIN Role");
}
