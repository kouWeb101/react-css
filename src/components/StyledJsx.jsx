export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- Styled JSX -</p>
        <button>Fight</button>
      </div>
      <style jsx="true">
        {`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            margin: 8px;
            padding: 8px;
          }
          .title {
            margin: 0;
            color: #3d84a4;
          }
        `}
      </style>
    </>
  );
};
