class Query {
  constructor(model, config) {
    this.model = model;
    this.config = config;
  }

  getAll(req, res, next) {
    return this.model.findAll(this.config)
      .then(record => res.json(record))
      .catch(err => next(err));
  }

  getById(req, res, next) {
    return this.model.findByPk(req.params.id, this.config)
      .then(record => res.json(record))
      .catch(err => next(err));
  }

  createOne(req, res, next) {
    return this.model.create(req.body)
      .then(record => res.json(record))
      .catch(err => next(err));
  }

  updateById(req, res, next) {
    return this.model.findByPk(req.params.id, this.config)
      .then(record => record.update(req.body))
      .then(record => res.json(record))
      .catch(err => next(err));
  }

  deleteById(req, res, next) {
    return this.model.findByPk(req.params.id).then(record => {
      this.model.destroy({ where: { id: req.params.id } })
        .then(num => res.json(record))
        .catch(err => next(err));
    });
  }
}

module.exports = Query;
