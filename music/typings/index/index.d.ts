type Banner = {
  pic: string;
  bannerId: string;
};

type Recommend = {
  id: number;
  picUrl: string;
  name: string;
};

type Playlist = {
  name: string;
  tracks: {
    id: string;
    name: string;
    al: { picUrl: string };
  }[];
};

type TopListData = {
  playlist: Playlist;
};
