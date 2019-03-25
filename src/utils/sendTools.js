class SendTools {
  static sendData(data) {
    return {
      data: data,
      status: 1
    };
  }
  static sendList(data, page) {
    return {
      items: data,
      page: page,
      status: 1
    };
  }
  static sendError(errMsg, errCode = 6001) {
    return {
      status: 0,
      errMsg: errMsg,
      errCode: errCode
    };
  }
}

module.exports = SendTools;
