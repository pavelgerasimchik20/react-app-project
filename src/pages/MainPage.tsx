import logo from "../images/logo.png"

export function MainPage(){
    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-auto">
            <img src={logo} alt="PartyGames logo" className=" h-52 " />
            <h1 className="text-7xl font-sans my-20 ">PartyGames</h1>
            <p className=" text-xl">Rent a variety of gaming tables and special party equipment that will diversify, decorate and improve any of your parties</p>

            <footer className="bg-black text-white fixed flex items-center justify-center bottom-0 h-[50px] text-center w-full">
                Designed specifically for Party Games
            </footer>
        </div>
    )
}