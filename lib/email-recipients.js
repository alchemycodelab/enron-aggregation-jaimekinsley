module.exports = [
  {
    '$unwind': {
      'path': '$headers.To'
    }
  }, {
    '$project': {
      'date': {
        '$dateToString': {
          'format': '%Y-%m-%d',
          'date': '$headers.Date'
        }
      },
      'to': '$headers.To'
    }
  }, {
    '$group': {
      '_id': '$to',
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
