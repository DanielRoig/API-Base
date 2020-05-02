const validator = (schema, property) => {
  return (req, res, next) => {
    const {
      error
    } = schema.validate(req.body);

    if (!error) {
      next();
    } else {

      res.status(422).json({
        error: error.details[0].message
      })
    }
  }
}
module.exports = validator;