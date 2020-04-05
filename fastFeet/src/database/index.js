import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

/// import de models aqui

// array de models aqui

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig);
        //percorrer array de models depois de criar array
    }
}

export default new Database();
