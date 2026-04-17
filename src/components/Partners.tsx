import { assets } from "./assets";
import QinghuaCollaboration from "./QinghuaCollaboration";

export default function Partners() {
  return (
      <div className="text-center" style={{background: 'linear-gradient(310deg, #F96D01 33%, #FFB941 100%)'}} >
        <div style={{color: 'white', padding:"62px 0",fontSize: 40, fontFamily: 'PingFang SC', fontWeight: '500', wordWrap: 'break-word'}}>核心战略协作方</div>
        <div style={{width:"100%",padding:"18px 0px 80px"}} >
          <div className="overflow-hidden"
          style={{
            width: 491,
            height: 142,
            backgroundColor:"#fff",
            backgroundImage: `url(${assets.partnerA})`,
            backgroundSize: "346px 112px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display:"inline-block",
            marginRight:40,
            borderRadius:14,
          }}>
          </div>
          <div 
          style={{
            width: 491,
            height: 142,
            backgroundColor:"#fff",
            backgroundImage: `url(${assets.partnerB})`,
            backgroundSize: "428px 125px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display:"inline-block",
            borderRadius:14,
          }}></div>
        </div>
        <div
        style={{
          width: "100%",
          height: 1458,
          backgroundColor:"#fff",
          backgroundImage: `url(${assets.partnerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: 62,
        }}>
          <div style={{color: '#F96D01', fontSize: 40, fontFamily: 'PingFang SC', fontWeight: '500', wordWrap: 'break-word',marginBottom:30}}>数字化资源支撑矩阵</div>
          <div className="mx-auto w-full max-w-[1140px] px-2 sm:px-4">
           
            <div className="relative px-5 py-5 sm:px-7 sm:py-7">
            <div 
            className="pointer-events-none absolute h-[105px] w-[186px]" 
            style={{
              backgroundImage: `url(${assets.partneraWhite})`,
              backgroundSize: "186px auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              top:-60,
              left:160,
            }}/>
            <div 
            className="pointer-events-none absolute left-5 top-0 h-[75px] w-[256px]" 
            style={{
              backgroundImage: `url(${assets.partnerbWhite})`,
              backgroundSize: "186px auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              top:-48,
              left:760,
            }}/>
            <div className="pointer-events-none absolute left-5 top-0 h-[7px] w-[90px] bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute left-1/2 top-0 h-[7px] w-[325px] -translate-x-1/2 bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute right-5 top-0 h-[7px] w-[90px] bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[7px] w-[120px] bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[7px] w-[240px] -translate-x-1/2 bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[7px] w-[95px] bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute left-0 top-[350px] h-[325px] w-[7px] bg-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute left-0 top-0 h-[108px] w-[112px] border-l-[7px] border-t-[7px] border-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute right-0 top-0 h-[108px] w-[112px] border-r-[7px] border-t-[7px] border-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[95px] w-[95px] border-b-[7px] border-l-[7px] border-[#fb6b00]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[95px] w-[95px] border-b-[7px] border-r-[7px] border-[#fb6b00]" aria-hidden />
            <QinghuaCollaboration />
          </div>
        </div>
      </div>
    </div>
  );
}

