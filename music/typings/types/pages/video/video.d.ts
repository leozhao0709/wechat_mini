declare namespace VideoPage {
  type NavList = NavListItem[];
  type VideoList = VideoItem[];

  type NavListItem = {
    id: number;
    name: string;
  };

  type VideoItem = {
    vid: string;
    title: string;
    coverUrl: string;
    praisedCount: number;
    commentCount: number;
    creator: {
      avatarUrl: string;
      nickname: string;
    };
    urlInfo: {
      id: string;
      url: string;
    };
  };
}
