class UserExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserExistsError';
    this.statusCode = 409;
  }
}

module.exports = UserExistsError;
