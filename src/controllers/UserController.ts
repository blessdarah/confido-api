import { CreateUserRequest } from "../requests/CreateUserRequest";

export const UserController = {
  // index show create edit update delete store
  index: (req, res) => {
    res.json([
      {
        user1: "test",
      },
    ]);
  },
  store: (req, res) => {
    // const {username, email, password} = req.body;
    const { error, result } = CreateUserRequest.validate(req);
    if (error) {
      res.error({
        message: "not found",
      });
    }
    // continue working
  },
  show: (req, res) => {
    const { id } = req.params;
  },
  update: (req, res) => {},
};
