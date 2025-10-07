import Container from "../components/container";
import { AlbumsFilter } from "../contexts/albums/components/albums-filter";
import { PhotoList } from "../contexts/photos/components/photo-list";

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "3421", title: "Album 1" },
          { id: "3422", title: "Album 2" },
          { id: "3423", title: "Album 3" },
        ]}
        className="mb-9"
      />
      <PhotoList
        photos={[
          {
            id: "123",
            title: "Olá",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album 1" },
              { id: "3422", title: "Album 2" },
              { id: "3423", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
