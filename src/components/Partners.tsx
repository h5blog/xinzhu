import { assets } from "./assets";

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
        }}
        >
        <img 
          src={assets.qinghua}
          style={{
            width: "auto",
            height: "1140px",
            margin: "0 auto"
          }}
        />
      </div>
      </div>
  );
}

