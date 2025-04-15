import mysql, { Pool } from 'mysql';

let pool: Pool | null = null;

// Initialize MySQL connection pool
export const init = () => {
  pool = mysql.createPool({
    connectionLimit: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || '10'),
    host: process.env.MY_SQL_DB_HOST,
    user: process.env.MY_SQL_DB_USER,
    password: process.env.MY_SQL_DB_PASSWORD,
    port: parseInt(process.env.MY_SQL_DB_PORT || '3306'),
    database: process.env.MY_SQL_DB_DATABASE
  });
};

// Execute SQL queries using promises
export const execute = <T>(query: string, params: string[] | Object = []): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    if (!pool) return reject('Pool was not created. Ensure init() is called first.');
    pool.query(query, params, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

// Call init on server start
init();
