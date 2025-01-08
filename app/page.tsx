import { Content, Services, ServiceImages } from "./components";

export default function Home() {
  const ImageDetails = [
    {
      id: "1",
      name: "Viezh Robert",
      country: "arsaw, Poland",
      comment:
        "“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      image: "user-1.png",
      alt: "1",
    },
    {
      id: "2",
      name: "Kim Young Jou",
      country: "Seoul, South Korea",
      comment:
        "“I like it because I like to travel far and still can connect with high speed.”",
      image: "user-2.png",
      alt: "2",
    },
  ];

  return (
    <div>
      <Content />
      <Services />
      <ServiceImages ImageDetails={ImageDetails} />
      <h1>Hello, world v2</h1>
    </div>
  );
}
