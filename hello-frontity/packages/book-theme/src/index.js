const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\book-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "book-theme",
  roots: {
    booktheme: Root
  },
  state: {
    booktheme: {}
  },
  actions: {
    booktheme: {}
  }
};
