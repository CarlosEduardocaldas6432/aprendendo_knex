// Update with your config settings.

require('dotenv').config();



export default {
		client: 'mysql2',
		connection: {
            database: 'crud',
			user: 'root',
			password: 'process.env.DB_SENHA'
			
		},
	
};