import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {

  return (
    <header className="bg-clrElmt shadow-md">
        <div className="md:max-w-[686px] md:py-[70px] m-auto flex justify-between 2xl:max-w-[1280px] 2xl:pt-[30px] 2xl:pb-[33px]">
          <h1 className="text-[20px] font-extrabold">Where in the world?</h1>
          <ThemeSwitcher />
        </div>
    </header>
  )
}

export default Header