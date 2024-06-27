import HeroHeader from "../../components/hero-header/hero-header";
import ImpactInfo from "../../components/impact-info/impact.info";

import ImgChat from "../../img/icon-chat.png"
import ImgMoney from "../../img/icon-money.png"
import ImgcSecurity from "../../img/icon-security.png"

export default function Homepage() {
  return (
    <div className="flex flex-col grow">
      <HeroHeader />
      <div className="flex justify-between">
        <ImpactInfo title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." img={ImgChat}/>
        <ImpactInfo title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!" img={ImgMoney}/>
        <ImpactInfo title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe." img={ImgcSecurity}/>
      </div>
    </div>
  );
}
