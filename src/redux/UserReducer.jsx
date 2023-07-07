import { UserData } from "../Components/Data";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "users",
  initialState: UserData,
  reducers: {
    addUser(state, action) {
      const { email, name, company } = action.payload;
      if (email !== "" && name !== "" && company !== "") {
        state.push(action.payload);
      } else return state;
    },

    updateUser(state, action) {
      const { id, email, name, company, status, lastName } = action.payload;
      const uu = state.find((f) => f.id == id);
      if (uu) {
        uu.name = name;
        uu.lastName = lastName;
        uu.email = email;
        uu.company = company;
        uu.status = status;
      }
    },

    deleteUser(state, action) {
      const { id } = action.payload;
      return state.filter((f) => f.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
