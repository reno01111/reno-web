import Image from "next/image";
import Seo from "./_seo";

export default function Home() {
  return (
    <div className="home-bg">
      <Seo
        pageTitle={"ホーム"}
        pageDescription={"このページはホームページです。"}
        pageImg={"https://reno.pages.dev/images/site-ogp.jpg"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <div className="home-index">
        <div>
          <h1>About Me.</h1>
          <br />
          <p style={ {maxWidth: "500px"} }>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iste
            nemo quibusdam, quae fugit aliquam illum quasi doloremque id ea
            dignissimos nam ipsum, excepturi dolores possimus vero aspernatur
            sequi numquam dolorem! Id, accusamus? Delectus, exercitationem!
            Error excepturi debitis nostrum at eius totam dolore libero
            blanditiis, laborum, repellat incidunt? Soluta, ea architecto culpa
            fuga eveniet officia corrupti eaque, deserunt molestias neque,
            aspernatur adipisci rem tempora? Eveniet quas eligendi explicabo.
            Magni ab quibusdam expedita alias ex. Debitis facilis eius explicabo
            nam, saepe magni. Vero qui exercitationem beatae quasi? Reiciendis
            distinctio doloribus nihil eveniet? Mollitia, quasi illo. Odit
            quaerat dicta dignissimos quo voluptate.
          </p>
        </div>
      </div>
      <div className="home-index">
        <div>
          <h1>Page Content.</h1>
          <br />
          <p style={ {maxWidth: "500px"} }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nihil quisquam laboriosam sit id, accusantium, iure praesentium
            cupiditate harum possimus soluta. Voluptatum consequatur explicabo
            nesciunt, tempora labore adipisci vero, inventore reprehenderit
            dicta voluptate nostrum quos dolore! Beatae minima, adipisci aperiam
            provident voluptatum, tempore aut harum impedit necessitatibus non
            perferendis sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
