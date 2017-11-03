export const home = async (req, res, next) => {
  res.render('page/home');
};

export const splash = async (req, res, next) => {
  res.render('page/splash');
};

export default { home, splash };
