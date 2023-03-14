const { db } = require("./server/db");
const Users = require("./server/db/models/Users");

const users = [
  {
    username: "Jack",
    password: "conway",
  },
  {
    username: "Austin",
    password: "forker",
  },
  {
    username: "Andrew",
    password: "brierton",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return Users.create(user);
      })
    );

    console.log("Seeding success");
    db.close();
  } catch (err) {
    console.error(err);
    db.close();
  }
};

seed();
