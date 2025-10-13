import { useParams } from "react-router";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import { PhotosNavigator } from "../contexts/photos/components/photos-navigator";
import { ImagePreview } from "../components/image-preview";
import Button from "../components/button";
import { AlbumsListSelectable } from "../contexts/albums/components/abums-list-selectable";
import { useAlbums } from "../contexts/albums/hooks/use-albums";

export function PagePhotoDetails() {
  const { id } = useParams();
  const { albums, isLoadingAlbums } = useAlbums();
  const isLoadingPhoto = false;
  const photo = {} as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>

          <AlbumsListSelectable
            photo={photo}
            albums={albums}
            loading={isLoadingAlbums}
          />
        </div>
      </div>
    </Container>
  );
}
