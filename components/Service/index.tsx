import React from "react";
import {RiRoadsterFill} from "react-icons/ri"
import {IoAirplaneOutline} from "react-icons/io5"
import {GiCargoShip} from "react-icons/gi"
import {MdDirectionsBus} from "react-icons/md"

const Service = () =>{
    const service = [{icon:<RiRoadsterFill />, title:"Авто тээвэрлэлтийн үйлчилгээ", text:"Авто тээвэрлэтийн үйлчилгээ нь тээвэр ложистикийн үйл ажиллагааг хэрэглэгчидэд цогцоор нь үзүүлэх боломжийг бүрдүүлж өгдөг . Бид үйлчлүүлэгчдийнхээ хүсэлтээр авто кран,  жижиг, дунд болон хvнд даацын автомашинуудаар “Хаалганаас хаалганд” хүргэх үйлчилгээг түргэн шуурхай  чанарын өндөр түвшинд үзүүлдэг." },
    {icon:<IoAirplaneOutline/>, title:"Агаарын тээвэр", text:"Манай компани Korean Air,  MIAT, Air China, Japan Air зэрэг авиа  компаниудын улс хооронд  хийгдэж байгаа зорчигч тээврийн шууд нислэгээр дамжуулан яаралтай  ачаа тээшийг богино хугацаанд тээвэрлэж байна. Мөн орон нутгийн агаарын тээврийн Mongolian Air Line,  Eznes Airways, компаниудын  нислэгээр орон нутгийн яаралтай ачааг цаг алдалгүй хүргэж байна." },
    {icon:<GiCargoShip/>, title:"Далайн тээвэр", text:"Бид дэлхийн томоохон далайн тээврийн компаниуд болох China Shipping Container Lines, MAERSK Container LINE, OOCL, Wanghai, Sinotrans Container Lines, NAMSUNG, CMA-CGM, K-line зэрэг компанийн эзэмшлийн чингэлгүүдийг ашиглан гэрээт агентийн сүлжээгээр дамжуулан дэлхийн 50 гаруй улсад байрлах усан боомтуудаас бүх төрлийн ачааг хамгийн бага зардлаар , түргэн шуурхай тээвэрлэж байна." },
    {icon:<MdDirectionsBus />, title:"Төмөр замын тээвэр", text:"Монгол улс хэдийгээр далайд гарцгүй, газар зүйн хувьд алслагдмал байрлалтай орон боловч Европ, Азийг холбосон төмөр замын асар өргөн сүлжээ бүхий дэд бүтцийн дунд буюу  ОХУ-ын бүрэн цахилгаанжсан 40.000км төмөр замын сүлжээ болон Транс Азийн төмөр замын сүлжээнд холбогдож байдаг. Энэ нь манай улсын хувьд транзит ачааг  богино хугацаанд тээвэрлэх өргөн боломжийг олгодог юм." }]
return(<div className="bg-[#F2F2F2]">
    <div className="py-10 md:py-20 container mx-auto px-10 md:px-20">
    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        {service.map((item)=>(
            <div  data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000} className="bg-white p-8 space-y-5 text-left">
                <div className="text-[#277ecd] text-2xl md:text-4xl">{item.icon}</div>
                <div className=" font-semibold text-xl md:text-2xl">{item.title}</div>
                <div className=" text-lg md:text-xl">{item.text}</div>
            </div>
        ))}
    </div>
</div>
</div>)
}
export default Service