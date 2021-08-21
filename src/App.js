import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  MediaBox,
  Slider,
  Slide,
  Caption,
  SideNav,
  SideNavItem,
  Icon,
  Pagination,
} from "react-materialize";

function App() {
  return (
    <div>
      <SideNav
        trigger={
          <Button style={{ marginBottom: "10px" }}>
            <Icon>menu</Icon>
          </Button>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          user={{
            background: "https://placeimg.com/640/480/tech",
            image: "static/media/react-materialize-logo.824c6ea3.svg",
            email: "test@gmail.com",
            name: "Satria Darmawan",
          }}
        />
        <SideNavItem href="#" icon={<Icon>perm_identity</Icon>}>
          Profil Saya{" "}
        </SideNavItem>
        <SideNavItem href="#" icon={<Icon>help</Icon>}>
          Hubungi Kami
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Product</SideNavItem>
        <SideNavItem>Kesehatan</SideNavItem>
        <SideNavItem>Komputer & Aksesoris</SideNavItem>
        <SideNavItem>Gaming</SideNavItem>
        <SideNavItem>Kamera</SideNavItem>
        <SideNavItem>Olahraga</SideNavItem>
        <SideNavItem>Fashion Pria</SideNavItem>
        <SideNavItem>Fashion Wanita</SideNavItem>
      </SideNav>

      <Slider>
        <Slide
          image={
            <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" />
          }
        >
          <Caption placement="center">
            <h3>Pantai</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Product
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" />
          }
        >
          <Caption placement="center">
            <h3>Pantai</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Product
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" />
          }
        >
          <Caption placement="center">
            <h3>Paris</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Paris Dengan Membeli Product
            </h5>
          </Caption>
        </Slide>
      </Slider>
      <Row>
        <br />
        <p style={{ marginBottom: "0px" }}>Hot List</p>
        <Col m="3">
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                Audio
              </CardTitle>
            }
          >
            Audio Technica - Mulai Dari{" "}
            <span style={{ backgroundColor: "#db3f18" }}>Rp 910 rb</span>
          </Card>
        </Col>
        <Col m="3">
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                Handphone
              </CardTitle>
            }
          >
            <p style={{ fontSize: "14px" }}>
              Handphone Samsung - Mulai Dari{" "}
              <span style={{ backgroundColor: "#db3f18" }}>Rp 200 rb</span>
            </p>
          </Card>
        </Col>
        <Col m="3">
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                Sequishy
              </CardTitle>
            }
          >
            Sequishy - Mulai Dari{" "}
            <span style={{ backgroundColor: "#db3f18" }}>Rp 5,5 rb</span>
          </Card>
        </Col>
        <Col m="3">
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                Koleksi The Avengers
              </CardTitle>
            }
          >
            Koleksi The Avenger - Mulai Dari{" "}
            <span style={{ backgroundColor: "#db3f18" }}>Rp 10 rb</span>
          </Card>
        </Col>
      </Row>
      <Pagination activePage={2} items={8} style={{ marginTop: "20px" }} />
    </div>
  );
}

export default App;
