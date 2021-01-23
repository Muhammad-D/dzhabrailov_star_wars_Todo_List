import { db } from "../firebase";

const todosAPI = () =>
  db
    .collection("star_wars")
    .doc("todos")
    .get()
    .then((doc) => {
      if (doc.exists) {
        return Object.keys(doc.data()).map((key) => doc.data()[key]);
      }
    });

const addTodoAPI = (todoList) =>
  db
    .collection("star_wars")
    .doc("todos")
    .set({
      ...todoList,
    });

export { todosAPI, addTodoAPI };
