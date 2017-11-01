/**
* Change location's search string to Object.
*
* @param {string} q location's search string
* @returns {Object} search value set
*/
module.exports = function search2obj(q) {
  return q ? q.replace('?', '').split('&')
    .reduce((prev, curr) => {
      const [propertyName, propertyValue] = curr.split('=')

      return Object.assign(prev, { [propertyName]: propertyValue })
    }, {}) : {}
}
