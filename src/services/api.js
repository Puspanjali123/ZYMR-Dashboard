import axios from "axios";

const API_URL = "https://6874ce63dd06792b9c954fc7.mockapi.io/api/v1/users";

export async function getUsers() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching users", error);
    return [];
  }
}

export async function createUser(user) {
  try {
    const res = await axios.post(API_URL, user);
    return res.data;
  } catch (error) {
    console.error("Error creating user", error);
  }
}

export async function updateUser(id, user) {
  try {
    const res = await axios.put(`${API_URL}/${id}`, user);
    return res.data;
  } catch (error) {
    console.error("Error updating user", error);
  }
}
