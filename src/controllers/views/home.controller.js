/**
 * GET /
 * Home page.
 */
export default {
  index: (req, res) => {
    res.render('home', {
      title: 'Home',
    });
  },
};
