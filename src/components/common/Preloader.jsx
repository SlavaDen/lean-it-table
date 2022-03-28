import s from "./index.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader_container}>
      <div className={s.preloader}></div>
    </div>
  );
};

export { Preloader };
export default Preloader;
