import { Todo } from "../../models/todo.model";
import { User } from "../../models/user.model";

export const todoResolvers = {
  Query: {
    todos: async () => await Todo.find(),
    todo: async (_: any, { id }: any) => await Todo.findById(id),
  },
  Mutation: {
    createTodo: async (_: any, { title, creatorId }: any) => {
      const todo = new Todo({ title, creatorId });
      return await todo.save();
    },
    toggleTodo: async (_: any, { id }: any) => {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error("Todo not found");
      todo.completed = !todo.completed;
      return await todo.save();
    },
    deleteTodo: async (_: any, { id }: any) => {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error("Todo not found");
      return await Todo.findByIdAndDelete(id);
    },
  },
  Todo: {
    creator: async (parent: any) => {
      return await User.findById(parent.creatorId);
    },
  },
};
