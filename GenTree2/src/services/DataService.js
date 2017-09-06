'use strict';

import pg from 'pg';
const url = 'postgres://postgres:postgres@localhost:5432/gentree';

class Connector {
  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Connector()
    }
    return this.instance
  }

  execQuery(queryString) {
    debugger;
    console.log('Executing query: ' + queryString);
    return new Promise((res, rej) => {
      pg.connect(url, (err, client, done) => {
        const results = []
        // Handle connection errors
        if (err) {
          done();
          console.log(err);
          rej({ success: false, data: err })
        }
        // SQL Query > Select Data
        const query = client.query(queryString);
        // Stream results back one row at a time
        query.on('row', (row) => {
          console.log(row)
          results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
          console.log("Request done " + JSON.stringify(results));
          done();
          res(results);
        });
      });
    })
  }
}

class QueryHelper {
  static createSelectByIdQuery(tableName, id) {
    return `SELECT * FROM ${tableName} WHERE id = ${id}`
  }

  static createSelectAllQuery(tableName) {
    return `SELECT * FROM ${tableName}`
  }

}

export class DataService {
  constructor(table) {
    this.tableName = table;
  }

  getTableName() {
    return this.tableName;
  }

  getById(id) {
    return Connector.getInstance().execQuery(QueryHelper.createSelectByIdQuery(this.tableName, id))
  }

  getAll() {
    console.log('DataService getAll')
    return Connector.getInstance().execQuery(QueryHelper.createSelectAllQuery(this.tableName))
  }

  getPage(filter, pageData) {
    console.log('DataService getPage')
    return Connector.getInstance().execQuery(QueryHelper.createSelectAllQuery(this.tableName))
  }



}