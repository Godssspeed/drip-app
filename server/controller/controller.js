module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get("db");

    db.getPosts().then(response => {
      res.status(200).json(response);
    });
  },
  getLikes: (req, res) => {
    const db = req.app.get("db");

    db.getLikes().then(response => {
      res.status(200).json(response);
    });
  }
};
