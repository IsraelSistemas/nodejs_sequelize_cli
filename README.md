# makeup_store_api

npm scripts with parameters

"new-migration": "npx sequelize-cli migration:create"
  Example: npm run new-migration -- --name MigrationName

"g-model": "npx sequelize-cli model:generate"
  Example: npm run g-model -- --name ModelName --attributes id:integer

"g-seed": "npx sequelize-cli seed:generate"
  Example: npm run g-seed -- --name ModelName

"seeds": "npx sequelize-cli db:seed:all"
  Example: npm run seed

"migrate-undo-all": "npx sequelize-cli db:migrate:undo:all"
  Example (undo all): npm run migrate-undo-all
  Example (undo to specific): npm run migrate-undo-all -- --to MigrationName.js
