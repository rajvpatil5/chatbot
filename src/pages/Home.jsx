import Chatbot from '../components/Chatbot';
import botImage from '../assets/images/botImage.png';
import Instructions from '../components/Instructions';

const Home = () => {
  return (
    <div className="bg-[#b4deffa1]">
      <div>
        <Instructions />
      </div>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="">
          <Chatbot />
        </div>
      </div>
      <div className="bg-none bg-cover" style={{ backgroundImage: `url('${botImage}')` }}></div>
    </div>
  );
};

export default Home;
