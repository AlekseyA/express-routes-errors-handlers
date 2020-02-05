const { CustomError } = require("./exceptions");

// emulate some storage
const DB = {
  1: "Mike",
  2: "Alex"
};

const successCtrl = () => ({
  title: "Some payload"
});

const failCtrl = () => {
  throw Error("Something was wrong");
};

const userCtrl = id => {
  if (!id) {
    // first way
    throw new CustomError("Value param is broken", 400);
  }
  const name = DB[id];
  if (!name) {
    // second way
    throw { message: `There is no user with id ${id}`, statusCode: 404 };
  }
  return { name };
};

module.exports = {
  successCtrl,
  failCtrl,
  userCtrl
};
