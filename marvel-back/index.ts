import app from './src/config/app';
import { DBPostgres } from './src/config/db/db.sequelize';

const { PORT } = process.env;

DBPostgres();

app.listen( PORT , () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});