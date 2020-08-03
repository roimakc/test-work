export interface User {
  id: number;
  created_at: string;
  text: string;
  user: {
    screen_name: string;
    name: string;
    profile_image_url: string;
  };
}
