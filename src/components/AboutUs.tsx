import { useEffect } from "react";
import Overlay from "./Overlay";

const AboutUs = () => {
  useEffect(() => {
    document.getElementById("Hud4")!.style.color = "orange";
  }, []);
  return (
    <>
      <Overlay />
      <div className="OfferMain">
        <h1>A tutaj coś o nas! 🖐</h1>
        <div className="TextAboutUs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            cursus turpis massa tincidunt dui ut ornare lectus sit. Erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan. Diam
            vel quam elementum pulvinar etiam. Mattis ullamcorper velit sed
            ullamcorper. Turpis egestas sed tempus urna et pharetra pharetra. Ac
            turpis egestas sed tempus urna et. At tempor commodo ullamcorper a
            lacus vestibulum sed. Vulputate enim nulla aliquet porttitor lacus
            luctus. Pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Velit sed ullamcorper morbi tincidunt. Odio ut sem nulla
            pharetra diam sit amet nisl suscipit. Odio morbi quis commodo odio
            aenean sed adipiscing diam donec. Bibendum enim facilisis gravida
            neque. Tincidunt nunc pulvinar sapien et ligula. Felis eget velit
            aliquet sagittis id consectetur. In hac habitasse platea dictumst
            vestibulum rhoncus est. Varius sit amet mattis vulputate. Donec
            ultrices tincidunt arcu non sodales neque sodales. Morbi tincidunt
            augue interdum velit euismod in pellentesque massa placerat. Tortor
            at risus viverra adipiscing at in tellus integer. Turpis nunc eget
            lorem dolor. Ut porttitor leo a diam. Nunc consequat interdum varius
            sit amet mattis. Quam adipiscing vitae proin sagittis nisl rhoncus
            mattis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi
            tincidunt ornare massa. Sit amet purus gravida quis blandit turpis.
            Risus viverra adipiscing at in tellus integer feugiat scelerisque.
            Et netus et malesuada fames ac. Augue eget arcu dictum varius duis
            at consectetur lorem donec. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Eu consequat ac felis donec et. Enim sed faucibus
            turpis in eu mi bibendum neque. Pulvinar sapien et ligula
            ullamcorper malesuada. Mattis molestie a iaculis at erat
            pellentesque adipiscing commodo elit. Tincidunt arcu non sodales
            neque sodales ut etiam sit amet. Cursus sit amet dictum sit amet
            justo donec enim diam. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna eget. In egestas erat imperdiet sed euismod.
            Dignissim diam quis enim lobortis scelerisque. Nisl tincidunt eget
            nullam non nisi est sit amet. In metus vulputate eu scelerisque
            felis imperdiet. Dignissim enim sit amet venenatis urna cursus eget
            nunc scelerisque. Amet consectetur adipiscing elit pellentesque
            habitant morbi tristique senectus. Ligula ullamcorper malesuada
            proin libero nunc consequat interdum. Purus viverra accumsan in nisl
            nisi scelerisque eu ultrices vitae. Congue eu consequat ac felis
            donec et odio pellentesque diam. Adipiscing bibendum est ultricies
            integer quis auctor. Eget mi proin sed libero enim sed. Nec sagittis
            aliquam malesuada bibendum arcu. Euismod quis viverra nibh cras
            pulvinar mattis. Dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi. Lorem dolor sed viverra ipsum nunc
            aliquet bibendum enim. Bibendum ut tristique et egestas quis ipsum
            suspendisse ultrices gravida. Sed blandit libero volutpat sed cras
            ornare arcu dui vivamus. Et odio pellentesque diam volutpat.
            Tincidunt eget nullam non nisi. Molestie nunc non blandit massa enim
            nec. Enim praesent elementum facilisis leo vel fringilla est
            ullamcorper eget. Mi eget mauris pharetra et. Semper feugiat nibh
            sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget
            mauris pharetra. Vulputate dignissim suspendisse in est ante in nibh
            mauris. Lorem donec massa sapien faucibus et molestie ac. Eleifend
            donec pretium vulputate sapien. Faucibus interdum posuere lorem
            ipsum dolor sit. Scelerisque purus semper eget duis at tellus at
            urna condimentum. Mollis nunc sed id semper. Aliquam sem fringilla
            ut morbi tincidunt augue interdum velit. Nibh praesent tristique
            magna sit amet. Sit amet luctus venenatis lectus magna fringilla
            urna porttitor rhoncus. Bibendum est ultricies integer quis auctor
            elit sed vulputate mi. Blandit massa enim nec dui. Non pulvinar
            neque laoreet suspendisse interdum.
          </p>
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default AboutUs;
