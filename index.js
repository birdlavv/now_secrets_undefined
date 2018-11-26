if (process.env.NODE_ENV === 'development') {
  require('now-env');
}
module.exports = (req, res) => {
  console.log(process.env);
  res.end(`Hello from Node.js on Now 2.0!`);
};