export const errorHandler = (stausCode, message) => {
  const error = new Error();
  error.stausCode = statusCode;
  error.message = message;
  return error;
};
