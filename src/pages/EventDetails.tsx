import { useParams } from "react-router";
import banner from "../assets/banner.jpeg";
import MyMap from "../components/MyMap";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  const handleAttend = () => {
    console.log("attend");
  };
  return (
    <div className="p-3 overflow-y-auto h-screen max-w-[1440px] mx-auto">
      <div className="w-full mb-4">
        <img src={banner} alt="" className="object-cover w-full h-[300px]" />
      </div>
      <div className="">
        <div className="flex gap-3 items-center">
          <p className="text-3xl">Event title</p>
          <p className="text-accent">
            Attending <span>30</span>
          </p>
        </div>
        <div className="flex justify-between mt-3 flex-col-reverse lg:flex-row gap-4 ">
          <p className="text-text max-w-3xl min-h-[200px] whitespace-pre-line lg:mb-6 my-6 max-h-[300px] overflow-y-auto">
            reprehenderit fugit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia, maxime cumque? Itaque, animi ab minus
            sint repudiandae quia unde asperiores quo facere alias deleniti
            aperiam odio dolore a reprehenderit fugit. Lorem ipsum dolor sit
          </p>
          <div className="bg-card p-4 rounded min-h-[200px] min-w-[300px] max-w-[400px] flex flex-col justify-between my-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px]">
                  <MdOutlineAttachMoney />
                </div>
                <p className="text-text text-sm">20</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px]">
                  <CiCalendarDate />
                </div>
                <p className="text-text text-sm">09.08.2025</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px]">
                  <CiLocationOn />
                </div>
                <div className="flex flex-wrap">
                  <p className="text-text text-sm">
                    Ace Café, Stonebridge, NW10 7UD Ace Café, Stonebridge, NW10
                    7UD Ace Café, Stonebridge, NW10 7UD
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GiFullMotorcycleHelmet />
                <p className="text-text text-sm">Unlimited</p>
              </div>
            </div>
            <Button onClick={handleAttend} className="w-full mt-4">
              Attend
            </Button>
          </div>
        </div>
        <div className="w-full h-[100px] mt-6">
          <MyMap />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
