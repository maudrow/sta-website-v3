type EpisodeYamlData = {
  guests: string[];
  title: string;
  description: {
    full: string;
    short: string;
  };
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  tags: string[];
  links: {
    name: string;
    url: string;
  }[];
  publicationDate: string;
  filePaths: {
    mp3: string;
  } & Partial<{
    coverArt: string;
    outline: string;
    transcript: string;
  }>;
  youTube: {
    mainCode: string;
    clipTitles?: string[];
  }
}

export default EpisodeYamlData;
