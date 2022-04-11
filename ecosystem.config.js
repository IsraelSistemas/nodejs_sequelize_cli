const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	apps: [{
		name: 'nodejs_sequelize_cli',
		script: './index.js',
		// error_file: './error.log',
		// out_file: 'out.log',
		watch: false,
		env: {
			PORT: 5000
		},
		exec_mode: 'fork_mode',
		autorestart: true
	}]
};
