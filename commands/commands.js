/*  Notes:
    1. For security purpose create a .env file and save the host name, database name and password in it.
    2. Up in the seed file is for adding data, column or update.
    3. Down in the seed file is for deleting or removing data.
 */

/* Download sequelize migration cli globally
    $ npm install -g sequelize-cli
*/

/* Add Sequelize CLI to project
   $ sequelize init
 */

/* Create Database
    $ sequelize db:create
*/

/* Drop Database
    $ sequelize db:drop
*/

/* Create a new model/table
    $ npx sequelize model:generate --name User --attributes Title:string,description:string;
    $ npx sequelize model:generate --name User --attributes Name:string,Username:string,Email:string;
*/

/* Undo the last migration
   npx sequelize-cli db:migrate:undo
 */

/* Undo all migrations
   npx sequelize-cli db:migrate:undo:all
 */

/*  Undo to a particular migration
    npx sequelize-cli db:migrate:undo --to XXXXXXXXXXXXXX-create-posts.js
 */

/*  Create a new seed file - Seeders are used for inserting columns, data, deleting columns or data
    npx sequelize-cli seed:generate --name demo-user
*/

/*  Execute all seed
    npx sequelize-cli db:seed:all
 */

/* Execute a particular seed only
    npx sequelize-cli db:seed --seed 20231019170559-another-column.cjs
 */

/* Undo the last seed
   npx sequelize-cli db:seed:undo
 */

/* Undo all seed
   npx sequelize-cli db:seed:undo:all
 */

/*  Undo a particular seed
    npx sequelize-cli db:seed:undo --seed seed-name
 */

/*  Create migration skeleton with up and down
    npx sequelize-cli migration:generate --name migration-skeleton
 */