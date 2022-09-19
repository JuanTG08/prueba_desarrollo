import IMessage from '../interface/IMessage';
class Utils {
  static Message(
    error: Boolean,
    statusCode: number,
    message: string,
    payload: Boolean | any = false
  ): IMessage {
    return {
        error,
        statusCode,
        message,
        payload
    };
  }
}

export default Utils;
