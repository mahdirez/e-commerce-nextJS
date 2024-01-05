import bcrypt from "bcryptjs";

const users = [
  {
    name: "User1",
    email: "User1@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: true,
  },
  {
    name: "User2",
    email: "User2@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: false,
  },
];

export default users;
