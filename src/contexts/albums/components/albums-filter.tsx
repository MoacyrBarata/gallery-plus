import type React from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";
import { usePhotos } from "../../photos/hooks/use-photos";

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  const { filter } = usePhotos();

  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        <Button
          size="sm"
          className="cursor-pointer"
          variant={filter.albumId === null ? "primary" : "ghost"}
          onClick={() => filter.setAlbumId(null)}
        >
          Todos
        </Button>
        {!loading &&
          albums.map((album) => (
            <Button
              key={album.id}
              size="sm"
              className="cursor-pointer"
              variant={filter.albumId === album.id ? "primary" : "ghost"}
              onClick={() => filter.setAlbumId(album.id)}
            >
              {album.title}
            </Button>
          ))}
      </div>
    </div>
  );
}
