import NavLink from "./navLink/NavLink";
import ToggleThemeButton from "./ToggleThemeButton";

const links = [
  {
    title: "Our Work",
    path: "/",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
];

const Links = ({ session }) => {
  // const menuImage = isDarkMode() ? "/menu_dark.png" : "/menu_light.png";

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-4">
        {links.map((link) => (
          <NavLink item={link} key={link.title}></NavLink>
        ))}
      </div>
      <ToggleThemeButton />
    </div>
    // <div>
    //   <Image className="absolute right-0 mr-4" src={menuImage} alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
    //   {open && (
    //     <div className="absolute flex top-[60px] right-0 py-6 px-4 flex-col items-end gap-3 z-10 text-primary-light dark:text-primary-dark bg-secondary-light dark:bg-secondary-dark">
    //       <button onClick={toggleMode}>{darkMode ? "Dark Theme" : "Light Theme"}</button>
    //       {/* {links.map((link) => (
    //         <NavLink item={link} key={link.title} />
    //       ))} */}
    //     </div>
    //   )}
    // </div>
  );
};

export default Links;

// .mobileLinks {
//   position: absolute;
//   top: 100px;
//   right: 0;
//   width: 50%;
//   height: calc(100vh - 100px);
//   background-color: var(--bg);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   z-index: 10;
// }
