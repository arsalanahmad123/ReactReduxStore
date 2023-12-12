import Card from "../Components/Card";

function Home() {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap m-5 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            price={100}
            description={"Beautiful Nike Shoes ever 💕"}
            title={"Shoes"}
            keyId={index}
            imgSrc={
              "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/800x600/584221_v2.jpg"
            }
          />
        ))}
      </div>
      <div className="flex justify-between items-center flex-wrap m-5 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            price={200}
            description={"Beautiful Levi's Dress ever 💕"}
            title={"Dress"}
            keyId={index}
            imgSrc={
              "https://p.turbosquid.com/ts-thumb/lU/qNoAmk/pDrAFNWi/01/jpg/1501524980/300x300/sharp_fit_q85/88332453e114555c45b0b335cce3a5984ac614c7/01.jpg"
            }
          />
        ))}
      </div>
    </>
  );
}

export default Home;
