const { username, password } = process.env;
export const connection =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@nextjs.5fzq5.mongodb.net/nextjsTest?retryWrites=true&w=majority&appName=nextjs";
