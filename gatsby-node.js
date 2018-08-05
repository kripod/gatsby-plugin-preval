try {
  require.resolve('babel-plugin-preval');
} catch (e) {
  throw new Error(
    "'babel-plugin-preval' is not installed which is needed by plugin 'gatsby-plugin-preval'",
  );
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-preval',
  });
};
