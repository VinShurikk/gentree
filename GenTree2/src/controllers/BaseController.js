'use strict';

export class BaseController {

  service;
  me;

  constructor(service) {
    console.log("constructor is executed with "+ JSON.stringify(service));
    this.service = service;
    this.me = this;
  }

  getById(req, res) {
    debugger;
    const id = req.params.id
    this.service.getById(id)
      .then(data => res.json(data));
  }

  getAll(req, res) {
    this.service.getAll()
      .then(data => res.json(data));
  }

  getPage(req, res) {
    const filter = req.query.filter;
    const pageData = {
      page: req.query.page || 0,
      size: req.query.size || 20,
    }
    this.service.getPage(filter, pageData)
      .then(data => res.json(data));
  }

  insert(req, res) {
    const items = readBody(req);
    this.service.insert(items)
      .then(data => res.json(data));
  }

  update(req, res) {
    const items = readBody(req);
    this.service.update(items)
      .then(data => res.json(data));
  }

  delete(req, res) {
    const id = req.params.id
    this.service.delete(id)
      .then(data => res.json(data));
  }

}