// List your music files here
// Add files to public/music/ and list them here to display on the website

export interface MusicFile {
  id: string;
  title: string;
  artist?: string;
  filename: string;
}

export const musicLibrary: MusicFile[] = [
  {
    id: "1",
    title: "Juice WRLD type beat",
    artist: "King Otis",
    filename: "juice WRLD type beat.mp3",
  },
  {
    id: "2",
    title: "Demon",
    artist: "King Otis",
    filename: "Demon.mp3",
  },
  {
    id: "3",
    title: "Desert",
    artist: "King Otis",
    filename: "Desert.mp3",
  },
];
