import app from './app';
// import { startConnection } from './database';

const main = async () => {
    // startConnection();
    const port = app.get('port');
    await app.listen(port);
    console.log("Listening on Port", port);
}

main();