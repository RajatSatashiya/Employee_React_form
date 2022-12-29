import { useRef } from "react";

export default function Scroll() {
  const scrollRef = useRef(0);

  const upHandler = () => {
    console.log(scrollRef.current.scrollHeight);
    scrollRef.current.scrollTo(0, scrollRef.current.offsetTop - 8);
  };
  const downHandler = () => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  };

  return (
    <>
      <div
        className="scroll-container"
        ref={scrollRef}
        onClick={(e) => console.log(e)}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mi
          accumsan, facilisis libero nec, auctor ipsum. Ut convallis dolor
          mauris, nec accumsan metus tincidunt eu. In fringilla lacus ut leo
          convallis mattis. Nunc eget ligula libero. Aliquam erat volutpat.
          Quisque nec tortor laoreet, dictum lacus vitae, tincidunt orci. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per est
          interdum quis. Nullam venenatis maximus mauris, et efficitur leo
          vestibulum vitae. Nunc in consequat augue. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Vestibulum a nisl nec est luctus vulputate. Donec bibendum arcu et
          consequat tempus. Proin et tellus libero. Nunc ac iaculis dolor, id
          placerat diam. Cras porttitor purus id dolor pulvinar, ac pharetra
          velit hendrerit. Curabitur tristique, felis non commodo venenatis,
          nulla tellus efficitur purus, vitae molestie mi enim vitae metus.
          Aenean tincidunt, velit in imperdiet interdum, magna tortor ornare
          odio, quis ultrices urna sapien sed sem. Integer nec dapibus turpis.
          Morbi consectetur porta lectus. Vivamus ac ornare purus. Pellentesque
          sit amet lacus aliquet, pretium sapien non, aliquam mauris. Vivamus
          vulputate posuere metus sit amet commodo. Maecenas sit amet venenatis
          risus. Vestibulum et ipsum ex. Vestibulum vel augue bibendum, maximus
          turpis vel, scelerisque sem. Aliquam viverra quis arcu ac volutpat.
          Quisque vestibulum, sapien a porta dictum, lectus ipsum volutpat nibh,
          eget luctus metus mi non turpis.
        </div>
      </div>

      <button onClick={upHandler}>Scroll Up</button>
      <button onClick={downHandler}>Scroll Down</button>
    </>
  );
}
