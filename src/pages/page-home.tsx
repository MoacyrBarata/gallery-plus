import Container from "../components/container";
import { PhotoWidget } from "../contexts/photos/components/photo-widget";

export function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "123",
            title: "Olá",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album 1" },
              { id: "3422", title: "Album 2" },
              { id: "3423", title: "Album 3" },
            ],
          }}
        />
      </div>
    </Container>
  );
}
