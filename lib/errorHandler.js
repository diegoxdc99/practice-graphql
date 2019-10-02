function errorHandler(error) {
  console.log(error);
  throw new Error('Error server operator');
}

module.exports = errorHandler;
