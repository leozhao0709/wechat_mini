type UserProfile = {
  userId: string;
  nickname: string;
  avatarUrl: string;
  backgroundUrl: string;
};

type User = {
  token: string;
  profile: UserProfile;
};
