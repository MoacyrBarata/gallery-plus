import type React from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";

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
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        <Button size="sm" className="cursor-pointer" variant="primary">
          Todos
        </Button>
        {!loading &&
          albums.map((album) => (
            <Button
              key={album.id}
              size="sm"
              className="cursor-pointer"
              variant="ghost"
            >
              {album.title}
            </Button>
          ))}
      </div>
    </div>
  );
}
