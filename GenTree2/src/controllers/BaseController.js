'use strict';

export class BaseController {

  service;

  constructor(service) {
    console.log("constructor is executed with "+ JSON.stringify(service));
    this.service = service;
  }

  getById(req, res) {
    const id = req.params.id
    res.json(this.service.getById(id)
      .then(data => JSON.stringify(data)));
  }

  getAll(req, res) {
    res.json(this.service.getAll()
      .then(data => JSON.stringify(data)));
  }

  getPage(req, res) {
    const filter = req.query.filter;
    const pageData = {
      page: req.query.page || 0,
      size: req.query.size || 20,
    }
    debugger;
    res.json(this.service.getPage(filter, pageData)
      .then(data => JSON.stringify(data)));
  }

  insert(req, res) {
    const items = readBody(req);
    res.json(this.service.insert(items)
      .then(data => JSON.stringify(data)));
  }

  update(req, res) {
    const items = readBody(req);
    res.json(this.service.update(items)
      .then(data => JSON.stringify(data)));
  }

  delete(req, res) {
    const id = req.params.id
    res.json(this.service.delete(id)
      .then(data => JSON.stringify(data)));
  }

}