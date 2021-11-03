import scss from "./CssModules.module.scss";
export const CssModules = () => {
  return (
    <div className={scss.container}>
      <p className={scss.title}>- CSS Modules -</p>
      <button>Fight</button>
    </div>
  );
};
