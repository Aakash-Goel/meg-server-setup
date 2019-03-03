const Message = require('./model');

const resolvers = {
  Query: {
    messages: async () => {
      try {
        const mszs = await Message.find();
        return mszs.map(msz => {
          return { ...msz._doc };
        });
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createMessage: async (parent, args) => {
      try {
        const msz = new Message({
          title: args.messageInput.title,
        });
        const result = await msz.save();
        return { ...result._doc };
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
