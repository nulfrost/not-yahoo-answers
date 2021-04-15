module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/graphql",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};
