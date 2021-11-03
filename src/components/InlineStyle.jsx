export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px"
  };
  return (
    <div style={containerStyle}>
      <p>- Inline -</p>
      <button>Fight</button>
    </div>
  );
};
