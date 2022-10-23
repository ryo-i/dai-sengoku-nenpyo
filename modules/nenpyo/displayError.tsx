  // Display error
  const displayError = (error, props, key) => {
    if (error) {
      return <p>エラー: {error[key]}</p>;
    } else if (props[key] === '') {
      return null;
    } else if (!props[key]) {
      return <p>読み込み中...</p>;
    }
  };

  export { displayError };