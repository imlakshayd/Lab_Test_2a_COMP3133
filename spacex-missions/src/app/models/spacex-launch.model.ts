export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  launch_success: boolean | null;
  launch_site: LaunchSite;
  rocket: Rocket;
  links: Links;
  details: string | null;
  launch_failure_details: LaunchFailureDetails | null;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Links {
  mission_patch: string | null;
  mission_patch_small: string | null;
  reddit_campaign: string | null;
  reddit_launch: string | null;
  reddit_recovery: string | null;
  reddit_media: string | null;
  presskit: string | null;
  article_link: string | null;
  wikipedia: string | null;
  video_link: string | null;
  youtube_id: string | null;
  flickr_images: string[];
}

export interface LaunchFailureDetails {
  time: number;
  altitude: number | null;
  reason: string;
}
