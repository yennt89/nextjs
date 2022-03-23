import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  image: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="top-0 left-0 fixed z-50 w-full bg-blue-0 lg:backdrop-filter lg:backdrop-blur-md">
    <div className="px-3/100 screen1360:px-0 max-w-1360 mx-auto flex justify-between items-center lg:py-4">
      <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
        <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 text-yellow-0 border-yellow-0">
          <a href="/">Home</a>
        </li>
        <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
          <a href="https://www.app.corginft.io/farmer/">Cor Farmer</a>
        </li>
        <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
          <a href="https://market.corginft.io/">NFT Market</a>
        </li>
        <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
          <a href="https://drive.google.com/file/d/1o8Flb8wwyubITr4UKrgH39DH0Mwn1Y5C/view">
            Whitepaper
          </a>
        </li>
      </ul>
      <div className="items-center gap-8 xl:gap-12 hidden lg:flex">
        <ul className="flex items-center gap-8 xl:gap-12">
          <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
            <a href="https://corgi-nft-game.gitbook.io/corginft/">FAQS</a>
          </li>
          <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
            <a
              href="https://www.app.corginft.io/community/"
              target="_blank"
              rel="noreferrer"
            >
              Community
            </a>
          </li>

          <li className="font-bold border-b-2 leading-4 hover:text-yellow-0 hover:border-yellow-0 border-transparent">
            <a
              href="https://www.app.corginft.io/corteam/"
              target="_blank"
              rel="noreferrer"
            >
              Cor Team
            </a>
          </li>
        </ul>
        <a
          href="https://www.app.corginft.io//game"
          target="_blank"
          className="bg-yellow-0 font-bold px-5 py-3 rounded-lg cursor-pointer"
          rel="noreferrer"
        >
          Play game
        </a>
        <ul className="block">
          <li></li>
        </ul>
      </div>
    </div>
    <p className="hidden lg:block absolute top-8 xl:top-0 left-1/2 transform -translate-x-1/2 max-w-120 xl:max-w-194">
      <a href="/">
        <img src={`${props.image}`} alt={props.image} />
      </a>
    </p>
  </header>
);

export { HeroOneButton };
