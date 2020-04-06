import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

/// import de models aqui
import User from '../app/models/User';
import Recipient from '../app/models/Recipients';
// array de models aqui
const models = [User, Recipient];
class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig);
        //percorrer array de models depois de criar array
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
