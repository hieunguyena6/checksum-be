import HttpException from './HttpException';
import { ErrorCodes } from './errorCode';

/**
 * This exception can use used in case a user is not authorized to perform an action.
 */
class UserNotFoundException extends HttpException {
  constructor() {
    const errorDetail = ErrorCodes.USER_NOT_FOUND;
    super(404, errorDetail.MESSAGE, errorDetail.CODE);
  }
}

export default UserNotFoundException;
