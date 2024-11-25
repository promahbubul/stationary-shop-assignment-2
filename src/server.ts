import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import colors from 'colors';

colors.enable();

async function server() {
  try {
    const connect = await mongoose.connect(config.database_url as string);
    console.log(
      `Database connected successfully on ${connect.connection.host}`.bgGreen,
    );

    app.listen(config.port, () => {
      console.log(
        `Server is running 💻 on port ${config.port}`.green.bgMagenta,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

server();
