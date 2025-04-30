import { Contact } from "../../models/contact.model";

export const contactResolvers = {
  Query: {
    contacts: async () => await Contact.find(),
  },
  Mutation: {
    createContact: async (_: any, args: any) => {
      const contact = new Contact(args);
      return await contact.save();
    },
  },
};
